import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UnlockService } from '../common/services/unlock.service';
import { ModalService } from '../common/modal/modal.service';
import { AppStore } from '../common/models/appstore.model';
import { UnlockData, ActionCart } from '../common/models/unlock.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'customer-type-canvas',
  templateUrl: 'customer-type-canvas.component.html',
  styleUrls: ['customer-type-canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerTypeCanvasComponent {
  public unlockCanvas: Observable<UnlockData>;

  constructor(
    private unlockService: UnlockService,
    public modalService: ModalService,
    private store: Store<AppStore>
  ) {
    this.unlockCanvas = store.select('cms');
  }

  public modalClosed(e) {
    console.log('Event Called');
  }
}
