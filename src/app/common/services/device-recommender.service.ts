import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class DeviceRecommenderService {
	public baseUrl: string = 'https://www.att.com/';
  	public upgradingUserApiUrl: string = '../assets/content/upgrading-user-info.json';
  	
  	constructor(private http: HttpClient) { }
  	
  	public getUpgradingDeviceDetailsData() {
    	return this.http.get(this.upgradingUserApiUrl, {});
	}

    public getDeviceType = function (deviceType) {
        var upDeviceType;
        // set upgrading device type
        if (deviceType === 'handset' || deviceType === 'pda') {
            upDeviceType = 'phone';
        } else if (deviceType === 'netbook') {
            upDeviceType = 'tablet';
        } else if (deviceType === 'network') {
            upDeviceType = 'device';
        } else {
            upDeviceType = 'device';
        }
        return upDeviceType;
    };
}