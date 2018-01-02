import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../common/modal/index';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../../common/layout.module';
import { UnlockService } from '../../common/services/unlock.service';
import { AccountIEMIInformationComponent } from './account-imei-information.component';

@NgModule({
  declarations: [AccountIEMIInformationComponent],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    RouterModule.forChild([
      { path: '', component: AccountIEMIInformationComponent, pathMatch: 'full' }
    ])
  ],
  providers: [ModalService, UnlockService]
})
export class AccountIEMIInformationModule {}