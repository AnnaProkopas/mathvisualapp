import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasCubeComponent } from './canvas-cube.component';

describe('CanvasCubeComponent', () => {
  let component: CanvasCubeComponent;
  let fixture: ComponentFixture<CanvasCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
