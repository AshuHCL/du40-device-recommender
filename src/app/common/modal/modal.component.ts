import { 
        Component,
        ElementRef,
        Input,
        Output,
        OnInit,
        OnDestroy,
        EventEmitter,
        HostListener,
        ChangeDetectionStrategy } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ModalComponent implements OnInit, OnDestroy {
    @Output()
    public closed: EventEmitter<any> = new EventEmitter<any>();

    @Input()
    public id: string;

    @Input()
    public class: string;

    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    @HostListener('keyup', ['$event'])
    public focusBack(event: any, eventCode?: number): void {
        if (event.keyCode === 27) {
            this.element.style.display = 'none';
            document.documentElement.style.overflowY = 'scroll';
        }

        if (event.keyCode === 9 && event.target.id === 'lastElemFocus') {
            const modalWrapper = this.element.children;
            if (modalWrapper.length > 0) {
                const modalContainer = modalWrapper[0].children;
                const closeButton = modalContainer[0].children[0].children[0];
                closeButton.focus();
            }
        }
    }

    public ngOnInit(): void {
        const modal = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', (e: any) => {
            if (e.target.classList.contains('modalwrapper')) {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // open modal
    public open(): void {
        this.element.style.display = 'block';
        const modalWrapper = this.element.children;
        if (modalWrapper.length > 0) {
            const modalContainer = modalWrapper[0].children;
            const closeButton = modalContainer[0].children[0].children[0];
            closeButton.focus();
            if (modalContainer.length > 0) {
                modalWrapper[0].classList.add('active');
                modalContainer[0].classList.add('in');
            }
        }
        document.body.classList.add('modal-open');
        document.documentElement.style.overflowY = 'hidden';
    }

    // close modal
    public close(): void {
        this.element.style.display = 'none';
        const modalWrapper = this.element.children;
        if (modalWrapper.length > 0) {
            const modalContainer = modalWrapper[0].children;
            if (modalContainer.length > 0) {
                modalWrapper[0].classList.remove('active');
                modalContainer[0].classList.remove('in');
            }
        }
        this.closed.emit();
        document.body.classList.remove('modal-open');
        document.documentElement.style.overflowY = 'scroll';
    }

    // remove self from modal service when directive is destroyed
    public ngOnDestroy(): void {
        this.modalService.remove(this.id);
        if (!this.element.remove) {
            this.element.parentElement.removeChild(this.element);
            return;
        }
        this.element.remove();
    }
}
