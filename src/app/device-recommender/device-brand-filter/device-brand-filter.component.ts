import {    Component, OnInit,ChangeDetectorRef, ChangeDetectionStrategy,  Pipe, PipeTransform}from '@angular/core';

import {   Observable} from 'rxjs/Observable';

import {  DeviceRecommenderService} from '../../common/services/device-recommender.service';
import { FormsModule } from '@angular/forms';

@Component({

    selector: 'device-brand-filter',

    templateUrl: `device-brand-filter.component.html`,

    styleUrls: [`device-brand-filter.component.less`],

    changeDetection: ChangeDetectionStrategy.OnPush

})

export class
DeviceBrandFilterComponent
implements OnInit {
     

    uniqueArray: string;

    resultArray: any;
  
    data: any;

    hideElem: boolean;

    isClassVisible: false;
    brandArray:any=[];
    public totalDeviceRecommendations;

 sendMessage(): void {
        // send message to subscribers via observable subject
        this.deviceRecommenderService.sendMessage('Message from Home Component to App Component!');
    }
 
    clearMessage(): void {
        // clear message
        this.deviceRecommenderService.clearMessage();
    }

    public  getDevicePriceDetails = function(rexDevices) {

        console.log("getDevicePriceDetails funxn is gretting called. ");
        this.totalDeviceRecommendations =rexDevices;
       
        for (let key in rexDevices) {
            var a = this.totalDeviceRecommendations[key].brand;
            if(this.brandArray.indexOf(this.totalDeviceRecommendations[key].brand) == -1) {
              this.brandArray.push(this.totalDeviceRecommendations[key].brand);
            
            }
        };


        this.ref.detectChanges();

    };

    constructor(private deviceRecommenderService:
        DeviceRecommenderService, private ref: ChangeDetectorRef) {
        this.hideElem =false;
        console.log("uniqueArray" + this.uniqueArray);
    }

    checked() {
      return this.brandArray.filter(item => { return item.checked; });
    }
    ngOnInit() {

        console.log("uniqueArray" + this.uniqueArray);

        this.deviceRecommenderService.getRecommendationsFromCatalog().subscribe(

            (recommendedDevicesFromCatalog:
                any) => {

                this.data = recommendedDevicesFromCatalog.payload;

                //this.resultArray = this.data.map(function(a) {return a["brand"];});

                this.getDevicePriceDetails(this.data);

            }

        );

    }



}



@Pipe({

    name: 'filterUnique',

    pure: false

})

export class
FilterPipe implements
PipeTransform {

    uniqueArray: {}[];



    transform(value:
        any, args ? :
        any): any {


        // Remove the duplicate elements

        // let uniqueArray = value.filter(function (el, index, array) {

        // return array.indexOf(el) == index;

        // });


        this.uniqueArray =
            Array.from(new Set(value));


        return this.uniqueArray;

    }



}