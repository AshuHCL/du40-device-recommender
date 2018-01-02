import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { StepIndicatorComponent } from './step-indicator/index';
import { ReCaptchaComponent } from './recaptcha/recaptcha.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [],
  declarations: [
    HeaderComponent,
    FooterComponent,
    StepIndicatorComponent,
    ReCaptchaComponent
  ],
  exports: [HeaderComponent, FooterComponent, StepIndicatorComponent, ReCaptchaComponent]
})
export class LayoutModule {}
