import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ModalService } from '../../common/modal/index';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { UnlockService } from '../../common/services/unlock.service';
import { AppStore } from '../../common/models/appstore.model';
import { UnlockData, ActionCart } from '../../common/models/unlock.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'unlock-status-confirmation',
  templateUrl: 'unlock-status-confirmation.component.html',
  styleUrls: ['unlock-status-confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnlockStatusConfirmationComponent implements OnInit {
  public cms: Observable<UnlockData>;

  public orderStatus: any;
  public imeiNumber;

  constructor(
    public modalService: ModalService,
    private unlockService: UnlockService,
    private route: ActivatedRoute,
    private store: Store<AppStore>,
    private ref:ChangeDetectorRef
  ) {
    this.imeiNumber = this.route.snapshot.params['imeiNumber'];
    this.cms = store.select('cms');
  }

  public ngOnInit() {
    this.unlockService.unlockOrderStatus().subscribe((data: any) => {
        this.orderStatus = data.oceUnlockOrderStatusDO;
        this.ref.detectChanges();
      });
  }

}
