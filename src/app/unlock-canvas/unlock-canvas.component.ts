import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AppStore } from '../common/models/appstore.model';
import { UnlockData, ActionCart } from '../common/models/unlock.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'unlock-canvas',
  templateUrl: 'unlock-canvas.component.html',
  styleUrls: ['unlock-canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnlockCanvasComponent {
  public unlockCanvas: Observable<UnlockData>;

  constructor(private store: Store<AppStore>) {
    this.unlockCanvas = store.select('cms');
  }

}
