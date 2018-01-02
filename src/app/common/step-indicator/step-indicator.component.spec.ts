import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { StepIndicatorComponent } from './step-indicator.component';

describe('StepIndicatorComponent', () => {
  let component: StepIndicatorComponent;
  let fixture: ComponentFixture<StepIndicatorComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StepIndicatorComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });
});
