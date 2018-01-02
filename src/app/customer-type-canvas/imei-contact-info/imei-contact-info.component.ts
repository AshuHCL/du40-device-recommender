import { UnlockService } from '../../common/services/unlock.service';
import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ModalService } from '../../common/modal/index';
import { ActivatedRoute, Router } from '@angular/router';
import { AppStore } from '../../common/models/appstore.model';
import { UnlockData, ActionCart } from '../../common/models/unlock.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ImeiContactDetailsAction } from '../../common/actions/user.actions';
import { ImeiContactDetails } from '../../common/models/steps.model';

@Component({
  selector: 'imei-contact-info',
  templateUrl: './imei-contact-info.component.html',
  styleUrls: ['./imei-contact-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImeiContactInfoComponent implements OnInit {
  // @Input()
  public cms: Observable<UnlockData>;
  public isInvalid: boolean = true;

  public firstName = undefined;
  public lastName = undefined;
  public wirelessNumber = undefined;
  public email = undefined;
  public confirmEmail = undefined;

  public wirelessNumberValidErr: boolean = false;
  public firstNameValidErr: boolean = false;
  public lastNameValidErr: boolean = false;
  public emailValidErr: boolean = false;
  public confirmEmailValidErr: boolean = false;
  public invalidEmailFormatErr: boolean = false;
  public invalidConfirmEmailFormatErr: boolean = false;

  constructor(
    public modalService: ModalService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppStore>
  ) {
    this.cms = store.select('cms');
  }

  public ngOnInit() {
    const currentStore = this.getCurrentState();
    if (
      currentStore.user !== undefined &&
      currentStore.user.imeiContactDetails !== undefined
    ) {
      const details = currentStore.user.imeiContactDetails;
      this.wirelessNumber = details.wirelessNumber;
      this.firstName = details.firstName;
      this.lastName = details.lastName;
      this.email = details.email;
    }
  }

  public unlockNext() {
    const imeiContactDetails: ImeiContactDetails = {
      firstName: this.firstName,
      lastName: this.lastName,
      wirelessNumber: this.wirelessNumber,
      email: this.email
    };
    this.store.dispatch(new ImeiContactDetailsAction(imeiContactDetails));
    this.router.navigate(['/unlockConfirm/', { customerType: false }]);
  }

  public unlockPrevious() {
    // alert("navigate");
    this.router.navigate(['/device-unlock']);
  }

  public validateNext(event) {
    if (this.firstName !== undefined && this.firstName.length === 0) {
      this.firstNameValidErr = true;
    } else {
      this.firstNameValidErr = false;
    }

    if (this.lastName !== undefined && this.lastName.length === 0) {
      this.lastNameValidErr = true;
    } else {
      this.lastNameValidErr = false;
    }

    const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

    if (this.email !== undefined && this.email.length === 0) {
      this.invalidEmailFormatErr = false;
      this.emailValidErr = true;
    } else {
      if(this.email !== undefined && this.email.length !== 0 && !emailPattern.test(this.email)) {
        this.invalidEmailFormatErr = true;
        this.emailValidErr = false;
      } else {
        this.invalidEmailFormatErr = false;
        this.emailValidErr = false;
      }
    }

    if (this.confirmEmail !== undefined && this.confirmEmail.length === 0 ) {
      this.confirmEmailValidErr = true;
      this.invalidConfirmEmailFormatErr = false;
    } else {
      if(this.confirmEmail !== undefined && this.confirmEmail.length !== 0 ) {
       if(!emailPattern.test(this.confirmEmail) && this.email != this.confirmEmail) {
        this.invalidConfirmEmailFormatErr = true;
        this.confirmEmailValidErr = false;
       } else if(this.email != this.confirmEmail) {
        this.invalidConfirmEmailFormatErr = false;
        this.confirmEmailValidErr = true;
       } else {
          this.invalidConfirmEmailFormatErr = false;
          this.confirmEmailValidErr = false;
       }
      } else {
        this.invalidConfirmEmailFormatErr = false;
        this.confirmEmailValidErr = false;
      }
    }

    if (this.wirelessNumber !== undefined && this.wirelessNumber.length === 0) {
      this.wirelessNumberValidErr = true;
    } else {
      this.wirelessNumberValidErr = false;
    }

    if (
      this.firstName !== undefined &&
      this.firstName.length !== 0 &&
      this.lastName !== undefined &&
      this.lastName.length !== 0 &&
      this.wirelessNumber !== undefined &&
      this.wirelessNumber.length !== 0 &&
      this.email !== undefined &&
      this.email.length !== 0 &&
      this.confirmEmail !== undefined &&
      this.confirmEmail.length !== 0 &&
      this.email === this.confirmEmail
    ) {
      this.isInvalid = false;
    } else {
      this.isInvalid = true;
    }
  }

  private getCurrentState(): AppStore {
    let state: AppStore;
    this.store.take(1).subscribe((s) => {
      state = s;
    });
    return state;
  }
}
