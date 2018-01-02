import { ActionReducer, Action } from '@ngrx/store';
import {
  WirelessDetails,
  CustomerAccountDetails,
  ImeiContactDetails
} from '../models/steps.model';

export class WirelessDetailsAction implements Action {
  public type = 'ADD_WIRELESS_DETAILS';

  constructor(public payload: WirelessDetails) {}
}

// tslint:disable-next-line:max-classes-per-file
export class CustomerAccountDetailsAction implements Action {
  public type = 'ADD_CUSTOMER_DETAILS';

  constructor(public payload: CustomerAccountDetails) {}
}

// tslint:disable-next-line:max-classes-per-file
export class ImeiContactDetailsAction implements Action {
  public type = 'ADD_IMEI_DETAILS';

  constructor(public payload: ImeiContactDetails) {}
}

// tslint:disable-next-line:max-classes-per-file
export class ResetUserAction implements Action {
  public type = 'RESET_USER';
}
