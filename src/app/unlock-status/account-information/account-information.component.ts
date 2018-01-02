import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../common/modal/index';
import { Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { UnlockService } from '../../common/services/unlock.service';
import { AppStore } from '../../common/models/appstore.model';
import { UnlockData, ActionCart } from '../../common/models/unlock.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'account-information',
  templateUrl: 'account-information.component.html',
  styleUrls: ['account-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountInformationComponent implements OnDestroy {
  public cms: Observable<UnlockData>;

  public nonAttImeiReqErr: boolean = false;
  public nonAttImeiIsNotValid: boolean = false;
  public elementFocused;
  public nonAttReqNoErr: boolean = false;
  public isInvalid: boolean = true;
  public accountInfoForm: FormGroup;
  private subscriptionCaptcha: ISubscription;
  constructor(
    public modalService: ModalService,
    private route: Router,
    private unlockService: UnlockService,
    private store: Store<AppStore>,
    private fb: FormBuilder
  ) {
    this.cms = store.select('cms');
    this.accountInfoForm = fb.group({
      imeiNumber : ['', Validators.compose([Validators.required, Validators.minLength(15)])],
      requestNumber : ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      validate : ''
    });
  }

  get imeiNumber() {
     return this.accountInfoForm.get('imeiNumber');
  }
  get requestNumber() {
     return this.accountInfoForm.get('requestNumber');
  }

  public ngOnDestroy() {
    if (this.subscriptionCaptcha !== undefined) {
      this.subscriptionCaptcha.unsubscribe();
    }
  }

  public unlockNext() {
    this.route.navigate([
      '/unlock-status-confirm',
      { imeiNumber: this.accountInfoForm.value.imeiNumber }
    ]);
  }

  public getToken(event) {
    this.subscriptionCaptcha = this.unlockService
      .verifyCaptcha(event.token)
      .subscribe(
        (data: any) => {},
        (error) => {
          console.log('error', error);
        }
      );
  }
  public unlockPrevious() {
    this.route.navigate(['/unlock-canvas']);
  }
}
