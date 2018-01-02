import {
      Component,
      Input,
      OnInit,
      Output,
      EventEmitter,
      ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-captcha',
  template:
    '<div class="g-recaptcha" [attr.data-sitekey]="sitekey" data-callback="verified"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReCaptchaComponent implements OnInit {
  public sitekey: string = '6LekkTsUAAAAALYft1VnYNym3Z9pFQNNQe6V_7Yb';
  @Output() public tokenChange = new EventEmitter();

  public ngOnInit() {
    this.render();
    window['verified'] = (response) => this.verified(response);
  }

  public render() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  public verified(response) {
    // var requestParamToSiteVerify = {"googleReCaptchaRequest":{"token":response}}
    this.tokenChange.emit({
      token: response
    });
  }
}
