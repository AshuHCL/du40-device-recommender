import { ActionReducer, Action } from '@ngrx/store';
import {
  User,
  CustomerAccountDetails,
  ImeiContactDetails,
  WirelessDetails
} from '../models/steps.model';
import { WirelessDetailsAction } from '../actions/user.actions';

export const userInitialState: User = {}; //

export const ADD_WIRELESS_DETAILS = 'ADD_WIRELESS_DETAILS';
export const ADD_CUSTOMER_DETAILS = 'ADD_CUSTOMER_DETAILS';
export const ADD_IMEI_DETAILS = 'ADD_IMEI_DETAILS';
export const RESET_USER = 'RESET_USER';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export function userReducer(state: User, action: WirelessDetailsAction) {
  switch (action.type) {
    case ADD_WIRELESS_DETAILS:
      return Object.assign({}, state, { wirelessDetails: action.payload });
    case ADD_CUSTOMER_DETAILS:
      return Object.assign({}, state, {
        customerAccountDetails: action.payload
      });
    case ADD_IMEI_DETAILS:
      return Object.assign({}, state, { imeiContactDetails: action.payload });
    case RESET_USER:
      return userInitialState;
    default:
      return state;
  }
}
