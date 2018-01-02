import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../common/modal/index';
import { FormsModule } from '@angular/forms';
import { UnlockService } from '../../common/services/unlock.service';
import { ImeiContactInfoComponent } from './imei-contact-info.component';
import { LayoutModule } from '../../common/layout.module';

@NgModule({
  declarations: [ImeiContactInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    RouterModule.forChild([
      { path: '', component: ImeiContactInfoComponent, pathMatch: 'full' }
    ])
  ],
  providers: [ModalService, UnlockService]
})
export class ImeiContactInfoModule {}