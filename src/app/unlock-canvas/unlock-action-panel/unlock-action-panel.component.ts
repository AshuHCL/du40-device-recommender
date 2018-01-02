import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'unlock-action-panel',
  templateUrl: 'unlock-action-panel.component.html',
  styleUrls: ['unlock-action-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnlockActionPanelComponent {
  @Input() public actionPanel;
}
