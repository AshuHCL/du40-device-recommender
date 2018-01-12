import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DeviceRecommenderService } from '../../common/services/device-recommender.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'device-tiles',
    templateUrl: `device-tiles.component.html`,
    styleUrls: [`device-tiles.component.less`],
  	changeDetection: ChangeDetectionStrategy.OnPush
})



export class DeviceTilesComponent implements OnInit {
	message: any;
	filterdata:any;
	text:any;
	branditem:any;
	public itemPrice;
	public commitmentTerms = [];
	public imgUrl = [];
	public totalDeviceRecommendations;
	public totalDevicesLoaded;
	public rexTrueRecommendations = 0;
	public initDevicesLoaded = 6;
	brandFilterItems=this.message;
	public numberr = function(number) {
		console.log(number);
		return number;
	};
	
    subscription: Subscription;
	private getDevicePriceDetails = function (rexDevices) {
		let tempArr=[];
        var x, skuids;
		this.totalDeviceRecommendations = rexDevices;
		console.log("this.totalDeviceRecommendations"+rexDevices);
		this.ref.detectChanges();
		 this.branditem = this.totalDeviceRecommendations.map(function (item) {
			 this.tempArr.push(item.brand);
            //return  tempArr;
        }).join(',');
		console.log("branditem---",this.tempArr);
		//gets the initial recommended devices to be displayed from recommender API
        for (x in this.totalDeviceRecommendations) {
            if (this.totalDeviceRecommendations[x].source === 'rex') {
                this.rexTrueRecommendations += 1;
            }
        }
        if (this.rexTrueRecommendations < this.initDevicesLoaded / 2 || this.rexTrueRecommendations >= this.initDevicesLoaded) {
            if (this.totalDevicesLoaded > this.totalDeviceRecommendations.length) {
                this.totalDevicesLoaded = this.totalDeviceRecommendations.length;
            }
            // $scope.viewMoreDevices($scope.initDevicesLoaded);
        } else {
            this.totalDevicesLoaded = this.rexTrueRecommendations;
            // $scope.viewMoreDevices(rexTrueRecommendations);
        }

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

    constructor(private deviceRecommenderService: DeviceRecommenderService,	private ref: ChangeDetectorRef)
			{
				this.subscription = this.deviceRecommenderService.getMessage()
				 .subscribe(message => { this.message = message;
						console.log("mmmmmmmmm",this.message );
			 });

	 }

    ngOnInit() {

  	  	this.deviceRecommenderService.getUpgradingDeviceDetailsData().subscribe( 
        	(data: any) => {
        		this.deviceRecommenderService.getRecommendedDevices(data.payload).subscribe( 
                    recommendedDevices => {
                    	if(recommendedDevices == undefined || !recommendedDevices) {
                    		this.deviceRecommenderService.getRecommendationsFromCatalog().subscribe( 
                    			(recommendedDevicesFromCatalog: any) => {
		                    		this.getDevicePriceDetails(recommendedDevicesFromCatalog);
                    			}
                    		);
                    	} else {
	                    	this.getDevicePriceDetails(recommendedDevices);
                    	}
		            },
				    err => {
				      	console.log('Something went wrong!');
				      	this.deviceRecommenderService.getRecommendationsFromCatalog().subscribe( 
            				(recommendedDevicesFromCatalog: any) => {
		                    	this.getDevicePriceDetails(recommendedDevicesFromCatalog.payload);
            				}
            			);
				    }
		        );
    		}
    	);
    }

	 ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

}
