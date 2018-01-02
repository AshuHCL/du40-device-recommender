import { ActionReducer, Action } from '@ngrx/store';
import { UnlockData, ActionCart } from '../models/unlock.model';

export const cmsInitialState: UnlockData = {};

export const ADD_CMS_DATA = 'ADD_CMS_DATA';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export function cmsReducer(
  state: UnlockData = {},
  action: ActionWithPayload<UnlockData>
) {
  switch (action.type) {
    case ADD_CMS_DATA:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
