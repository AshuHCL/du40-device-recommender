import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DeviceRecommenderService } from '../../common/services/device-recommender.service';

@Component({
    selector: 'device-tiles',
    templateUrl: `device-tiles.component.html`,
    styleUrls: [`device-tiles.component.less`],
  	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceTilesComponent implements OnInit {
	
	public itemPrice;
	public commitmentTerms = [];
	public imgUrl = [];
	public totalDeviceRecommendations;
	public initDevicesLoaded = 6;
	public heroDeviceTileColorTheme;
	public devicesToBeDisplayed;
	public limitDevices = this.initDevicesLoaded;

	public viewMoreDevices = function(initDevicesLoaded) {
		console.log(initDevicesLoaded);
		console.log(this.devicesToBeDisplayed);
		this.limitDevices = this.initDevicesLoaded + initDevicesLoaded;
		var temp1 =  this.totalDeviceRecommendations.slice(initDevicesLoaded, this.limitDevices);
		this.devicesToBeDisplayed = this.devicesToBeDisplayed.concat(temp1);
		this.ref.detectChanges();
	};

	private getDevicePriceDetails = function (rexDevices) {

        var x, skuids;
		this.totalDeviceRecommendations = rexDevices;
		this.heroDeviceTileColorTheme = this.deviceRecommenderService.getColorTheme(rexDevices[0].htmlColor);
		this.ref.detectChanges();

        skuids = this.totalDeviceRecommendations.map(function (item) {
            return item.skuId;
        }).join(',');

        this.deviceRecommenderService.getItemPriceData(skuids).subscribe((result:any) => {
            var commitmentTerms = {};
            this.itemPrice = result.payload;
            this.ref.detectChanges();

            for (let key in this.itemPrice) {
            	var commitmentTerm = {name:"",leaseTotalMonths:"",deviceType:""};
                commitmentTerm.name = this.itemPrice[key].contractType;
                commitmentTerm.leaseTotalMonths = this.itemPrice[key].contractLength;
                commitmentTerm.deviceType = this.itemPrice[key].deviceType;
                commitmentTerms[key] = commitmentTerm;
                this.imgUrl[key] = this.deviceRecommenderService.getXpressImagePath(
                        this.itemPrice[key].brand, null, this.itemPrice[key].shortDisplayName, this.itemPrice[key].color, '-hero.png');
            };
            this.commitmentTerms = commitmentTerms;
            this.ref.detectChanges();

            // this.fetchShortLegalContentForDevices(this.commitmentTerms); TODO
        });
	};

	private fetchShortLegalContentForDevices = function(commitmentTerms) {
		// TODO
	};

    constructor(
    	private deviceRecommenderService: DeviceRecommenderService,
        private ref: ChangeDetectorRef 
    ) { }

    ngOnInit() {
  	  	this.deviceRecommenderService.getUpgradingDeviceDetailsData().subscribe( 
        	(data: any) => {
        		this.deviceRecommenderService.getRecommendedDevices(data.payload).subscribe( 
                    recommendedDevices => {
                    	if(recommendedDevices == undefined || !recommendedDevices) {
                    		this.deviceRecommenderService.getRecommendationsFromCatalog().subscribe( 
                    			(recommendedDevicesFromCatalog: any) => {
									this.devicesToBeDisplayed = recommendedDevicesFromCatalog.slice(0,this.initDevicesLoaded);
		                    		this.getDevicePriceDetails(recommendedDevicesFromCatalog);
                    			}
                    		);
                    	} else {
							this.devicesToBeDisplayed = recommendedDevices.slice(0,this.initDevicesLoaded);
							this.getDevicePriceDetails(recommendedDevices);
						}
		            },
				    err => {
				      	console.log('Something went wrong!');
				      	this.deviceRecommenderService.getRecommendationsFromCatalog().subscribe( 
            				(recommendedDevicesFromCatalog: any) => {
								this.devicesToBeDisplayed = recommendedDevicesFromCatalog.slice(0,this.initDevicesLoaded);
								this.getDevicePriceDetails(recommendedDevicesFromCatalog.payload);
            				}
            			);
				    }
		        );
    		}
    	);
    }

}
