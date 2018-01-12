import { Component, OnInit, ChangeDetectionStrategy, Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { DeviceRecommenderService } from "../common/services/device-recommender.service";
import { Subscription } from "rxjs/Rx";

@Pipe({
  name: 'limitTo'
})

export class TruncatePipe {
  transform(value: any, args: number) : any {   
    return value !== undefined ? value.slice(0, args) : null;
  }
}

@Pipe({
 name: 'searchfilter'
})


export class SearchFilterPipe implements PipeTransform {
  message: any;
  brandFilterItems: any;
  /*function isEmpty(value){
  return (value == null || value.length === 0);
}*/
  transform(items: any[], term: any,value: string)  {
        console.log('term----',this.message);
      if(items == undefined){
       alert();
        return  true;

      }
      else if (items !=undefined ){
        console.log(items.includes(this.message));
        return  items.includes(this.message);
      }
         
    }
}

@Component({
  selector: 'device-recommender',
  templateUrl: 'device-recommender.component.html',
  styleUrls: ['device-recommender.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceRecommenderComponent {
  message: any;
  subscription: Subscription;


constructor(
    	private deviceRecommenderService: DeviceRecommenderService,
        private ref: ChangeDetectorRef,
		
		)
		 {
				this.subscription = this.deviceRecommenderService.getMessage().subscribe(message => { this.message = message;
						console.log("mmmmmmmmm",this.message );
			 });

	 }
}
