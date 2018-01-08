import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DeviceRecommenderService } from '../../common/services/device-recommender.service';

@Component({
  selector: 'device-brand-filter',
  templateUrl: `device-brand-filter.component.html`,
  styleUrls: [`device-brand-filter.component.less`]
})
export class DeviceBrandFilterComponent implements OnInit {
  private rexData;
  public uniqueBrands = [];

  constructor(
    private deviceRecommenderService: DeviceRecommenderService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.deviceRecommenderService.getRexObservableData().subscribe(
      data => data.subscribe(
        rexData => {
          this.rexData = rexData;
          for(let key in this.rexData) {
            if(this.uniqueBrands.indexOf(this.rexData[key].brand) == -1) {
              this.uniqueBrands.push(this.rexData[key].brand);
            }          
          }
          this.ref.detectChanges();
        }
      )
    );
  }

}
