import { UnlockService } from './common/services/unlock.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LayoutModule } from './common/layout.module';
import { PreloaderService } from './common/services/preloader.service';
// tslint:disable-next-line:max-line-length
import { ModalService } from './common/modal/modal.service';
import { UnlockCanvasComponent } from './unlock-canvas/unlock-canvas.component';
import { UnlockCanvasModule } from './unlock-canvas/unlock-canvas.module';

import { DeviceRecommenderModule } from './device-recommender/device-recommender.module';

import { StartupService } from './common/services/startupService';

import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { cmsReducer, cmsInitialState } from './common/reducers/cms.reducer';
import { userReducer, userInitialState } from './common/reducers/user.reducer';


// tslint:disable-next-line:ban-types
export function startupServiceFactory(
  startupService: StartupService
  // tslint:disable-next-line:ban-types
): Function {
  return () => startupService.load();
}
/*
export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: false, position: 'right' }),
    maxAge: 25
  };
}
*/
@NgModule({
  declarations: [AppComponent, UnlockCanvasComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-demo-transfer-state-app' }),
    HttpClientModule,
    FormsModule,
    BrowserTransferStateModule,
    LayoutModule,
    UnlockCanvasModule,
    DeviceRecommenderModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'unlock-canvas', pathMatch: 'full' },
        { path: 'unlock-canvas', component: UnlockCanvasComponent },
        {
          path: 'device-unlock',
          loadChildren:
            './customer-type-canvas/customer-type-canvas.module#CustomerTypeCanvasModule'
        },
        {
          path: 'unlock-status',
          loadChildren:
            './unlock-status/unlock-status.module#UnlockStatusModule'
        },
        {
          path: 'unlockstep2',
          loadChildren:
            // tslint:disable-next-line:max-line-length
            './customer-type-canvas/account-information/account-information.module#AccountInformationModule'
        },
        {
          path: 'unlockstep3',
          loadChildren:
            // tslint:disable-next-line:max-line-length
            './customer-type-canvas/account-imei-information/account-imei-information.module#AccountIEMIInformationModule'
        },
        {
          path: 'unlockConfirm',
          loadChildren:
            // tslint:disable-next-line:max-line-length
            './customer-type-canvas/confirmation/confirmation.module#ConfirmationComponentModule'
        },
        {
          path: 'nonattunlock',
          loadChildren:
            // tslint:disable-next-line:max-line-length
            './customer-type-canvas/imei-contact-info/imei-contact-info.module#ImeiContactInfoModule'
        },
        {
          path: 'unlock-status-confirm',
          loadChildren:
            // tslint:disable-next-line:max-line-length
            './unlock-status/unlock-status-confirmation/unlock-status-confirmation.module#UnlockStatusConfirmationModule'
        },
        {
          path: 'device-recommender',
          loadChildren:
            // tslint:disable-next-line:max-line-length
            './device-recommender/device-recommender.module#DeviceRecommenderModule'
        }
      ],
      { useHash: true , preloadingStrategy: PreloadAllModules }
    ),
    StoreModule.forRoot({ cms: cmsReducer , user: userReducer })
    /*,
    StoreDevtoolsModule.instrument(instrumentOptions),
    StoreLogMonitorModule*/
  ],
  providers: [
    HttpClientModule,
    PreloaderService,
    ModalService,
    StartupService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
