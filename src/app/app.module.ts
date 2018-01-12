import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { AppComponent } from './app.component';
import { LayoutModule } from './common/layout.module';
import { DeviceRecommenderModule } from './device-recommender/device-recommender.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-demo-transfer-state-app' }),
    HttpClientModule,
    BrowserTransferStateModule,
    LayoutModule,
    DeviceRecommenderModule,
    RouterModule.forRoot(
      [
        {
          path: 'device-recommender',
          loadChildren:
            './device-recommender/device-recommender.module#DeviceRecommenderModule'
        }
      ],
      { useHash: false , preloadingStrategy: PreloadAllModules }
    )
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
