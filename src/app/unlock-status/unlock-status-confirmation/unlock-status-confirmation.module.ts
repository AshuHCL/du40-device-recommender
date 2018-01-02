import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../common/modal/index';
import { FormsModule } from '@angular/forms';
import { UnlockService } from '../../common/services/unlock.service';
import { UnlockStatusConfirmationComponent } from './unlock-status-confirmation.component';
import { LayoutModule } from '../../common/layout.module';

@NgModule({
  declarations: [UnlockStatusConfirmationComponent],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    RouterModule.forChild([
      { path: '', component: UnlockStatusConfirmationComponent, pathMatch: 'full' }
    ])
  ],
  providers: [ModalService, UnlockService]
})
export class UnlockStatusConfirmationModule {

}
