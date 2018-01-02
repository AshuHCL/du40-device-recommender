import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UnlockActionCardComponent } from './unlock-action-card.component';

describe('UnlockActionCardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnlockActionCardComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ ]
    }).compileComponents();
  }));

  it('should create the unlock action card component', async(() => {
    const fixture = TestBed.createComponent(UnlockActionCardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
