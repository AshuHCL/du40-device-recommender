import { UnlockData, ActionCart } from './unlock.model';
import { User } from './steps.model';

/**
 * Application Store for state management
 */
export interface AppStore {
  cms: UnlockData;
  user: User;
}
