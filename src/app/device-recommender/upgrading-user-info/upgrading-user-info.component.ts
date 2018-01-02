import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DeviceRecommenderService } from '../../common/services/device-recommender.service';

@Component({
  selector: 'upgrading-user-info',
  templateUrl: 'upgrading-user-info.component.html',
  styleUrls: ['upgrading-user-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradingUserInfoComponent implements OnInit {
	public upgradingDeviceDetails: any;
    public upgradingUserDescription : string;
    public upgradingDeviceDetailsDescription : string;
    private upgradingDeviceDetailsType : string;

    constructor(
    	private deviceRecommenderService: DeviceRecommenderService,
        private ref: ChangeDetectorRef     
    ) { }

    public ngOnInit() {

  	    this.deviceRecommenderService.getUpgradingDeviceDetailsData().subscribe( (data: => any) {
    	    	this.upgradingDeviceDetails = data.payload;
    	    	this.upgradingDeviceDetails.subscriberName = this.upgradingDeviceDetails.subscriberName || '';
                this.upgradingDeviceDetails.deviceMake = this.upgradingDeviceDetails.deviceMake || '';
                this.upgradingDeviceDetails.deviceModel = this.upgradingDeviceDetails.deviceModel || '';
                this.upgradingDeviceDetails.color = this.upgradingDeviceDetails.color || '';
                this.upgradingDeviceDetails.size = this.upgradingDeviceDetails.size || '';

                // Get formatted upgrading device type
                this.upgradingDeviceDetailsType = this.deviceRecommenderService.getDeviceType(this.upgradingDeviceDetails.deviceType);

                // Set upgrading user description
                if (this.upgradingDeviceDetails.subscriberName !== '' && this.upgradingDeviceDetails.deviceModel !== '') {
                    this.upgradingUserDescription = this.upgradingDeviceDetails.subscriberName + "'s " + this.upgradingDeviceDetails.deviceModel;
                } else {
                    this.upgradingUserDescription = this.upgradingDeviceDetails.ctn;
                }

                // Set upgrading device description
                this.upgradingDeviceDetailsDescription = this.upgradingDeviceDetails.ctn;
                this.ref.detectChanges();
    		}
    	);
    }

}