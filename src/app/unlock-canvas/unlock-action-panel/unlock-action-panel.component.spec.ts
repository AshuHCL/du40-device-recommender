import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalService } from '../../common/modal/modal.service';
import { UnlockActionPanelComponent } from './unlock-action-panel.component';

describe('UnlockActionPanelComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnlockActionPanelComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ ]
    }).compileComponents();
  }));

  it('should create the unlock action panel component', async(() => {
    const fixture = TestBed.createComponent(UnlockActionPanelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
