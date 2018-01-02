import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';
import { ModalService } from '../../common/modal/index';
import { UnlockService } from '../../common/services/unlock.service';
import { Router, ActivatedRoute } from '@angular/router';

import { AppStore } from '../../common/models/appstore.model';
import { UnlockData, ActionCart } from '../../common/models/unlock.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ResetUserAction } from '../../common/actions/user.actions';

@Component({
  selector: 'confirmation',
  templateUrl: 'confirmation.component.html',
  styleUrls: ['confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationComponent implements OnInit {
  public cms: Observable<UnlockData>;
  public requestNo: string = undefined;
  public cust;
  public customerType: boolean;

  constructor(
    public modalService: ModalService,
    private unlockService: UnlockService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppStore>,
    private ref: ChangeDetectorRef
  ) {
    this.cms = store.select('cms');
    this.cust = this.route.snapshot.params['customerType'];
    if (this.cust === 'true') {
      this.customerType = true;
    } else {
      this.customerType = false;
    }
  }

  public ngOnInit() {

    this.unlockService.confirmation().subscribe((data: any) => {
      this.requestNo = data.orderFlowResponseDO.requestNo;
      this.ref.detectChanges();
      this.store.dispatch(new ResetUserAction());
    });
  }

}
