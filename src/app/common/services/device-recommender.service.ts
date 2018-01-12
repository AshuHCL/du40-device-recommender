import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DeviceRecommenderService {
	public baseUrl: string = 'https://www.att.com/';
  	private upgradingUserApiUrl: string = '../assets/content/upgrading-user-info.json';
  	private catalogRexResponse: string = '../assets/content/recommended-devices.json';
  	private deviceRecommenderApi: string = '../assets/content/rexResponse.json';
  	private deviceImageUrlRoot = 'https://www.att.com/catalog/en/xpress/'
    private devicePriceApiResponse = '../assets/content/devicePriceApiResponse.json';
    private colorMatrix = [
        '#000000',
        '#5C5A5A',
        '#C14242',
        '#D2CCB5',
        '#8482A3',
        '#6E91AF',
        '#354D28',
        '#F1E0CC'
    ];
    private rexDevices = new Subject<any>();
    private selectedDeviceBrands = new Subject<any>();
  	
    constructor(private http: HttpClient) { }

    public getRexObservableData = function () {
        return this.rexDevices;
    };

    public getSelectedBrandsToFilter = function () {
        return this.selectedDeviceBrands;
    };
      
    public emitSelectedBrands = function (selectedBrands) {
        this.selectedDeviceBrands.next(selectedBrands);
    };

  	public getUpgradingDeviceDetailsData() {
    	return this.http.get(this.upgradingUserApiUrl, {});
	};

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

    public getRecommendedDevices = function (upgradingDeviceDetails) {
        var rex = this.deviceRecommenderApi,
            params = this.createParams(upgradingDeviceDetails);
        var a = this.http.get(rex);
        this.rexDevices.next(a);
        return a;
    };

    public getRecommendationsFromCatalog = function () {
        var a = this.http.get(this.catalogRexResponse, {});
        this.rexDevices.next(a);
    	return a;
    };

    public getItemPriceData = function(skuId) {
    	return this.http.get(this.devicePriceApiResponse, {
            params: {
                actionType: 'getskuprices',
                skuId: skuId
            },
            spinner: true
        });
    };

    public getXpressImagePath = function (manufacturer, shortDisplayName, displayName, color, extension) {
        var manufacturerClean = this.getCleanString(manufacturer);
        var nameClean = this.getCleanString(shortDisplayName || displayName);
        var colorClean = this.getCleanString(color);

        return this.deviceImageUrlRoot
            + manufacturerClean + '/'
            + nameClean + '/'
            + colorClean + extension;
    };

    public getColorTheme = function (hexValue) {
        hexValue = hexValue.toUpperCase();
        if (this.colorMatrix.indexOf(hexValue) !== -1) {
            return 'dark';
        } else {
            return 'light';
        }
    }

    private getCleanString = function(dirty) {
        var anythingThatDoesntMatch = /[^0-9a-zA-Z&+_ -]/g;
        var leadingAndTrailingSpaces = /^\s+|\s+$/g;
        var replacement = '_';
        var nothing = '';
        var clean;

        clean = dirty || 'unknown';
        clean = clean.replace(anythingThatDoesntMatch, replacement);
        clean = clean.replace(leadingAndTrailingSpaces, nothing);

        return clean;
    }

    private createParams = function (upgradingDeviceDetails) {
        var params = {
            params: {
                profile: 'DeviceUpgrade',
                filter: ['type:device', 'type:displayByGrp'],
                exclude: ['type:removeDuplicateSibling', 'flowTypes:up'],
                plancode: upgradingDeviceDetails.planSocCode,
                sdgid: upgradingDeviceDetails.sharedDataGroupSocCode,
                // REX needs this flag to expose special flair flags for each recommendation
                showDisplayContent: 'true'
            },
            timeout: 2000,
            spinner: true
        };

        return params;
    };
}