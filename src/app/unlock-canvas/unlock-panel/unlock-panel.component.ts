import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'unlock-panel',
  templateUrl: 'unlock-panel.component.html',
  styleUrls: ['unlock-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnlockPanelComponent {
  @Input() public devicePortal;

  @Input() public deviceHelp;

}
