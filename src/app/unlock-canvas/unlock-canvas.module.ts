import { NgModule, Component } from '@angular/core';
import { UnlockCanvasComponent } from './unlock-canvas.component';
import { UnlockPanelComponent } from './unlock-panel/unlock-panel.component';
import { UnlockActionPanelComponent } from './unlock-action-panel/unlock-action-panel.component';
import { CommonModule } from '@angular/common';
import { UnlockActionCardComponent } from './unlock-action-panel/unlock-action-card/index';
import { UnlockService } from '../common/services/unlock.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UnlockPanelComponent,
    UnlockActionPanelComponent,
    UnlockActionCardComponent
  ],
  exports: [
    UnlockPanelComponent,
    UnlockActionPanelComponent,
    UnlockActionCardComponent
  ],
  imports: [CommonModule, RouterModule],
  providers: [UnlockService]
})
export class UnlockCanvasModule {}
