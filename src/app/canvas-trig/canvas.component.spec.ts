import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasTrigComponent } from './canvas.component';

describe('CanvasTrigComponent', () => {
  let component: CanvasTrigComponent;
  let fixture: ComponentFixture<CanvasTrigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasTrigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasTrigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
