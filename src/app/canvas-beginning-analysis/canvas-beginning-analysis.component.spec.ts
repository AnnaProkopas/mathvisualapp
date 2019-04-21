import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBeginningAnalysisComponent } from './canvas-beginning-analysis.component';

describe('CanvasBeginningAnalysisComponent', () => {
  let component: CanvasBeginningAnalysisComponent;
  let fixture: ComponentFixture<CanvasBeginningAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasBeginningAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasBeginningAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
