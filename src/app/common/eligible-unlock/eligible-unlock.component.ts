import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { UnlockService } from '../services/unlock.service';
import { ModalService } from '../modal/modal.service';
import { Element } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';
import { AppStore } from '../models/appstore.model';
import { UnlockData, ActionCart } from '../models/unlock.model';

import { Store } from '@ngrx/store';

@Component({
  selector: 'eligible-unlock',
  styleUrls: ['./eligible-unlock.component.scss'],
  templateUrl: './eligible-unlock.component.html'
})
export class EligibleUnlockComponent {
  public modalContent: Observable<UnlockData>;

  public el;
  constructor(
    private store: Store<AppStore>,
    public modalService: ModalService,
    public elementRef: ElementRef
  ) {
    this.el = elementRef.nativeElement;
    this.modalContent = store.select('cms');
  }

  public close(e) {
    this.modalService.closeModalByChildElement(this.el);
  }
}
