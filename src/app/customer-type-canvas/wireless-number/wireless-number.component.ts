import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit } from '@angular/core';
import { ModalService } from '../../common/modal/index';
import { Router } from '@angular/router';
import { UnlockService } from '../../common/services/unlock.service';
import { PreloaderService } from '../../common/services/preloader.service';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { AppStore } from '../../common/models/appstore.model';
import { WirelessDetails } from '../../common/models/steps.model';
import { WirelessDetailsAction } from '../../common/actions/user.actions';
import 'rxjs/add/operator/take';
import { win32 } from 'path';

@Component({
  selector: 'wireless-number',
  templateUrl: 'wireless-number.component.html',
  styleUrls: ['wireless-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WirelessNumberComponent implements OnInit {
  @Input() public cms: any;
  public stepIndex = 1;
  public customerType: boolean = true;
  public isInvalid: boolean = true;
  public wirelessNumber: string = undefined;
  public termsChecked: boolean = false;
  // wireLessErrorMsg: boolean = false;
  public imeiNumber: string = undefined;

  public attWrlsNoReqErr: boolean = false;
  public attWrlsLengthWErr: boolean = false;
  public attWrlsValidErr: boolean = false;
  public attWrlsValidServerErr: boolean = false;

  public nonAttImeiReqErr: boolean = false;
  public errorMessage: boolean = false;

  public deviceMake: string;
  public deviceModel: string;
  public showDeviceDetail: boolean = false;

  constructor(
    public modalService: ModalService,
    private unlockService: UnlockService,
    private route: Router,
    private preloader: PreloaderService,
    private store: Store<AppStore>,
    private ref: ChangeDetectorRef
  ) { }

  public ngOnInit() {
    const currentStore = this.getCurrentState();
    if (
      currentStore.user !== undefined &&
      currentStore.user.wirelessDetails !== undefined
    ) {
      if (currentStore.user.wirelessDetails.customerType) {
        const details = currentStore.user.wirelessDetails;
        this.wirelessNumber = details.wirelessNumber;
        this.customerType = details.customerType;
      } else {
        const details = currentStore.user.wirelessDetails;
        this.customerType = details.customerType;
        this.imeiNumber = details.imeiNumber;
        this.deviceMake = details.make;
        this.deviceModel = details.model;
        this.showDeviceDetail = true;
      }
    }
  }

  public modalClosed(e) { }

  public onCustomerTypeChange(value: boolean) {
    this.customerType = value;
  }

  public validateNext(event) {
    if (this.customerType) {
      if (
        this.wirelessNumber !== undefined &&
        this.wirelessNumber.length === 0
      ) {
        this.attWrlsNoReqErr = true;
      } else {
        this.attWrlsNoReqErr = false;
      }

      if (
        this.wirelessNumber !== undefined &&
        this.wirelessNumber.length === 10 &&
        this.termsChecked
      ) {
        this.isInvalid = false;
      } else {
        this.isInvalid = true;
      }
    } else {
      if (this.imeiNumber !== undefined && this.imeiNumber.length === 0) {
        this.nonAttImeiReqErr = true;
      } else {
        this.nonAttImeiReqErr = false;
      }

      if (
        this.imeiNumber !== undefined &&
        this.imeiNumber.length === 15 &&
        this.termsChecked
      ) {
        this.isInvalid = false;
      } else {
        this.isInvalid = true;
      }

      if (this.imeiNumber !== undefined && this.imeiNumber.length === 15) {
        this.preloader.start();
        this.unlockService.imeiMakeModelResponse(this.imeiNumber).subscribe(
          (data: any) => {

            // return data;
            // this.route.navigate['/unlock-canvas'];
            this.preloader.stop();
            this.showDeviceDetail = true;
            this.deviceMake = data.orderFlowResponseDO.make;
            this.deviceModel = data.orderFlowResponseDO.model;
            this.ref.detectChanges();

          },
          (error) => {
            console.log(error);
            this.preloader.stop();
          }
        );
      }
    }
  }

  public termsChange() {
    this.termsChecked = !this.termsChecked;

    if (this.customerType) {
      if (
        this.wirelessNumber !== undefined &&
        this.wirelessNumber.length === 10 &&
        this.termsChecked
      ) {
        this.isInvalid = false;
      } else {
        this.isInvalid = true;
      }
    } else {
      if (
        this.imeiNumber !== undefined &&
        this.imeiNumber.length === 15 &&
        this.termsChecked
      ) {
        this.isInvalid = false;
      } else {
        this.isInvalid = true;
      }
    }
  }

  public unlockNext() {
    const wirelessDetails: WirelessDetails = {
      customerType: this.customerType,
      imeiNumber: this.imeiNumber,
      wirelessNumber: this.wirelessNumber,
      make : this.deviceMake,
      model: this.deviceModel
    };

    this.store.dispatch(new WirelessDetailsAction(wirelessDetails));
    if (this.customerType) {
      this.unlockService.orderFlow(this.wirelessNumber).subscribe(
        (data: any) => {
          //   this.store.dispatch({ type: 'ADD_WIRELESS_DETAILS', payload: wirelessDetails });
          this.route.navigate([
            '/unlockstep2/',
            { wirelessNumber: this.wirelessNumber }
          ]);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.unlockService.imeiOrderFlow(this.imeiNumber).subscribe(
        (data: any) => {
          this.route.navigate(['/nonattunlock']);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    // this.route.navigate(['/unlockstep2', {wirelessNumber: this.wirelessNumber}]);
  }

  public unlockPrevious() {
    // alert("navigate");
    this.route.navigate(['/unlock-canvas']);
  }

  public getToken(event) {
    this.unlockService.verifyCaptcha(event.token).subscribe(
      (data: any) => { },
      (error) => {
        console.log('error', error);
      }
    );
  }

  private getCurrentState(): AppStore {
    let state: AppStore;
    this.store.take(1).subscribe((s) => {
      state = s;
    });
    return state;
  }
}
