import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { UnlockService } from './common/services/unlock.service';
import 'rxjs/add/operator/filter';
import { Store } from '@ngrx/store';
import { AppStore } from './common/models/appstore.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @Input() public loading: boolean = false;

  public constructor(
    public store: Store<AppStore>,
    private router: Router,
    private unlockService: UnlockService
  ) {
    /*
    router.events
      .filter((event) => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
        window.scrollTo(0, 0);
      });*/
  }

}
