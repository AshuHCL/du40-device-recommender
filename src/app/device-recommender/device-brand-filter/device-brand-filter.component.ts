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
  private selectedBrands = [];

  public getSelectedBrand = function(selectedBrand, event) {
    if(event.target.checked) {
      if(this.selectedBrands.indexOf(selectedBrand) == -1) {
        this.selectedBrands.push(selectedBrand);
        this.deviceRecommenderService.emitSelectedBrands(this.selectedBrands);
      }
    }
    else {
      if(this.selectedBrands.indexOf(selectedBrand) !== -1) {
        var brandIndex = this.selectedBrands.indexOf(selectedBrand);
        this.selectedBrands.splice(brandIndex, 1);
        this.deviceRecommenderService.emitSelectedBrands(this.selectedBrands);
      }
    }
  }

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
