import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDownArrowComponent } from './svg-down-arrow.component';

describe('SvgDownArrowComponent', () => {
  let component: SvgDownArrowComponent;
  let fixture: ComponentFixture<SvgDownArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgDownArrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDownArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
