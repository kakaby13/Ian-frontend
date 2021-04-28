import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SturtupTableComponent } from './sturtup-table.component';

describe('SturtupTableComponent', () => {
  let component: SturtupTableComponent;
  let fixture: ComponentFixture<SturtupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SturtupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SturtupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
