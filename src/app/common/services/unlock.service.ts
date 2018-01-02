import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class UnlockService {
  public baseUrl: string = 'https://www.att.com/';
  public redirectOCEWorkFlowUrl: string = 'apis/deviceunlock/OCEUnlockOrder/redirectOCEWorkFlow';
  public customerOrderFlow: string = 'apis/deviceunlock/OCEUnlockOrder/orderFlow';
  public validateEmailUrl: string = 'apis/deviceunlock/UnlockUtility/Verify/ValidateEmail';
  public unlockOrderStatusUrl: string = '../assets/content/unlock-status.json';

  constructor(private http: HttpClient) {}

  public orderFlow(customerNumber) {
    return this.http.get('../assets/content/orderflow-response.json');
  }

  public imeiOrderFlow(imeiNumber) {
    return this.http.get('../assets/content/imei-orderflow-response.json');

  }

  public validateEmail(domain) {
    const requestJson = {
      unlockValidateEmailRequest: {
        domain
      }
    };

    return this.http.post(this.baseUrl + this.validateEmailUrl, requestJson);
     // , {headers: header})
  }

  public confirmation() {
    return this.http.get('../assets/content/confirmation.json');
  }

  public imeiMakeModelResponse(imeiNumber) {
    return this.http.get('../assets/content/imei-make-model-response.json');
  }

  public unlockOrderStatus() {
    // let header: HttpHeaders = new HttpHeaders();
    // header.append('Content-Type', 'application/json');
    // header.append('Access-Control-Allow-Origin', '*');

    return this.http.get(this.unlockOrderStatusUrl, {}); // , {headers: header})
  }

  public verifyCaptcha(token) {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append(
      'secret',
      '6LekkTsUAAAAAH9lNKlOePHpepDrgaepEX-TurtI'
    );
    urlSearchParams.append('response', token);
    const body = urlSearchParams.toString();

    return this.http.post(
      'https://www.google.com/recaptcha/api/siteverify',
      body,
      { headers: header }
    );
  }
}
