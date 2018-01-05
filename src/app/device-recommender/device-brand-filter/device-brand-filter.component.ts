import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DeviceRecommenderService } from '../../common/services/device-recommender.service';
@Component({
  selector: 'device-brand-filter',
  templateUrl: `device-brand-filter.component.html`,
  styleUrls: [`device-brand-filter.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceBrandFilterComponent implements OnInit {
  hideElem: boolean;
  isClassVisible: false;
public totalDeviceRecommendations;

private getDevicePriceDetails = function (rexDevices) {
		this.totalDeviceRecommendations = rexDevices;
		this.ref.detectChanges();
	};
  constructor(private ref: ChangeDetectorRef ) { this.hideElem = false;}

  ngOnInit() {
    var num = [0,1,2,3,4,5,6,7];
    this.getDevicePriceDetails(num);
  }

}
