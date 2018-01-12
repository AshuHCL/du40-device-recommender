import { Component, OnInit, ChangeDetectionStrategy, Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Pipe({
  name: 'limitTo'
})

export class TruncatePipe {
  transform(value: any, args: number) : any {   
    return value !== undefined ? value.slice(0, args) : null;
  }
}

@Component({
  selector: 'device-recommender',
  templateUrl: 'device-recommender.component.html',
  styleUrls: ['device-recommender.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceRecommenderComponent {

}
