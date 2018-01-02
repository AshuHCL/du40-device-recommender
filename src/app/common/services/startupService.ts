
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppStore } from '../models/appstore.model';
import 'rxjs/add/operator/map';

@Injectable()
export class StartupService {
  // data;

  constructor(public http: HttpClient, public store: Store<AppStore>) {}

  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  public load(): Promise<any> {

    return this.http.get('../assets/content/unlock.json').map((data: any) => {
        const curLang = localStorage.unlockapplang || 'en';
        this.store.dispatch({ type: 'ADD_CMS_DATA',
            payload: data.unlockPortalLabelAndErrorObj[0][curLang] });
      }).toPromise()
      .catch((err: any) => Promise.resolve());
  }

}
