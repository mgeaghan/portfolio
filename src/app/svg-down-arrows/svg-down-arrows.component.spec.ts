import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDownArrowsComponent } from './svg-down-arrows.component';

describe('SvgDownArrowsComponent', () => {
  let component: SvgDownArrowsComponent;
  let fixture: ComponentFixture<SvgDownArrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgDownArrowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDownArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
