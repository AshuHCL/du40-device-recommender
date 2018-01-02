import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ModalService } from '../common/modal/modal.service';

@Component({
  selector: 'unlock-status',
  templateUrl: 'unlock-status.component.html',
  styleUrls: ['unlock-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnlockStatusComponent implements OnInit {
  public unlockCanvas: any;

  constructor(public modalService: ModalService) {}

  public ngOnInit() {
    /** TODO */
  }

  public modalClosed(e) {
    /** TODO */
  }
}
