import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SturtupItemComponent } from './sturtup-item.component';

describe('SturtupItemComponent', () => {
  let component: SturtupItemComponent;
  let fixture: ComponentFixture<SturtupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SturtupItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SturtupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
