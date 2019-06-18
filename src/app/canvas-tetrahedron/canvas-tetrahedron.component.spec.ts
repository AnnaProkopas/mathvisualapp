import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasTetrahedronComponent } from './canvas-tetrahedron.component';

describe('CanvasStereometryTetrahedronComponent', () => {
  let component: CanvasTetrahedronComponent;
  let fixture: ComponentFixture<CanvasTetrahedronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasTetrahedronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasTetrahedronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
