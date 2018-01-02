import { ModalComponent } from './modal.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ModalService } from './modal.service';
import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

class MockModalService {
  private modals: any[] = [];

  constructor() { }
  public add(modal: any) {
    this.modals.push(modal);
  }

  public remove(id: string) {
  }

  public open(id: string) {
  }

  public close(id: string) {
  }

  public closeModalByChildElement(el: Element) {
  }
}

describe('Modal component', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let mockModalService: MockModalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [
        { provide: ModalService, useClass: MockModalService },
        { provide: ElementRef }
      ]
    }).compileComponents();
  }));

  beforeEach((inject([ModalService], (_ModalService: MockModalService) => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    mockModalService = _ModalService;
  })));

  it('should be created', () => {
    expect(fixture).toBeDefined();
    expect(component).toBeTruthy();
  });

  it(`Should really test model component ngOninit`, () => {
    component.id = " ";
    component.ngOnInit();
  });

  it(`Should really test model component Open`, () => {
    component.open();
  });

  it(`Should really test model component Close`, () => {
    component.close();
  });

  it(`Should really test model component ngOnDestroy`, () => {
    component.ngOnDestroy();
  });
  /* it(`Should really test model component ngOnDestroy if element remove is true`, () => {
    component.element.remove = false;
    component.ngOnDestroy();
  });

  it(`Should really test model component keyEvent if block`, () => {
    let event = {
      isTrusted: true,
      keyCode: 27
      };
    component.keyEvent(this.event);
  }); */
});
