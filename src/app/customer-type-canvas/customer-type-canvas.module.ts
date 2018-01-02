import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerTypeCanvasComponent } from './index';
import { UnlockService } from '../common/services/unlock.service';
import { ModalComponent } from '../common/modal/index';
import { ModalService } from '../common/modal/modal.service';
import { EligibleUnlockComponent } from '../common/eligible-unlock/index';
/*  */
import { WirelessNumberComponent } from './wireless-number/index';
import { AccountInformationComponent } from './account-information/index';
import { ConfirmationComponent } from './confirmation/index';
/*  */
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../common/layout.module';

@NgModule({
  declarations: [
    CustomerTypeCanvasComponent,
    WirelessNumberComponent,
    ModalComponent,
    EligibleUnlockComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    RouterModule.forChild([
      { path: '', component: CustomerTypeCanvasComponent, pathMatch: 'full' }
    ])
  ],
  providers: [UnlockService, ModalService]
})
export class CustomerTypeCanvasModule {}
