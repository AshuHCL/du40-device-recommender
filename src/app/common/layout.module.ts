import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class LayoutModule {}
