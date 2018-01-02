import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../common/modal/index';
import { FormsModule } from '@angular/forms';
import { UnlockService } from '../../common/services/unlock.service';
import { ConfirmationComponent } from './confirmation.component';
import { LayoutModule } from '../../common/layout.module';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    RouterModule.forChild([
      { path: '', component: ConfirmationComponent, pathMatch: 'full' }
    ])
  ],
  providers: [ModalService, UnlockService]
})
export class ConfirmationComponentModule {}