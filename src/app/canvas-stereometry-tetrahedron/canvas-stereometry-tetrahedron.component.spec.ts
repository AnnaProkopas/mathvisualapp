import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasStereometryTetrahedronComponent } from './canvas-stereometry-tetrahedron.component';

describe('CanvasStereometryTetrahedronComponent', () => {
  let component: CanvasStereometryTetrahedronComponent;
  let fixture: ComponentFixture<CanvasStereometryTetrahedronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasStereometryTetrahedronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasStereometryTetrahedronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
