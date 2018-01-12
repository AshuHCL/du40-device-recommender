import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Pipe, PipeTransform, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  TruncatePipe,SearchFilterPipe }   from './device-recommender.component';
import { DeviceRecommenderComponent } from './device-recommender.component';
import { UpgradingUserInfoComponent } from './upgrading-user-info/upgrading-user-info.component';
import { DeviceTilesComponent } from './device-tiles/device-tiles.component';
import { DeviceBrandFilterComponent } from './device-brand-filter/device-brand-filter.component';
import { DeviceRecommenderService } from '../common/services/device-recommender.service';

@NgModule({
  declarations: [
    DeviceRecommenderComponent,
    UpgradingUserInfoComponent,
    DeviceTilesComponent,
    DeviceBrandFilterComponent,
    TruncatePipe,
    SearchFilterPipe
  ],
  imports: [CommonModule,FormsModule,
    RouterModule.forChild([
      { path: '', component: DeviceRecommenderComponent, pathMatch: 'full' }
    ])
  ],
  providers: [DeviceRecommenderService]
})
export class DeviceRecommenderModule {}
