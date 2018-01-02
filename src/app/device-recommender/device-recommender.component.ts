import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'device-recommender',
  templateUrl: 'device-recommender.component.html',
  styleUrls: ['device-recommender.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceRecommenderComponent {

}
