import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalService } from '../../common/modal/modal.service';
import { UnlockPanelComponent } from './unlock-panel.component';

describe('UnlockPanelComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnlockPanelComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ ]
    }).compileComponents();
  }));

  it('should create the unlock panel component', async(() => {
    const fixture = TestBed.createComponent(UnlockPanelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
