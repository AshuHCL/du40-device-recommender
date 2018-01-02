import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'unlock-action-card',
  templateUrl: 'unlock-action-card.component.html',
  styleUrls: ['unlock-action-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnlockActionCardComponent {
  @Input() public actionCard;
}
