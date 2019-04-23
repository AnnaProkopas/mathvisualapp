import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasStereometryComponent } from './canvas-stereometry.component';

describe('CanvasStereometryComponent', () => {
  let component: CanvasStereometryComponent;
  let fixture: ComponentFixture<CanvasStereometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasStereometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasStereometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
