import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupTableComponentComponent } from './startup-table-component.component';

describe('StartupTableComponentComponent', () => {
  let component: StartupTableComponentComponent;
  let fixture: ComponentFixture<StartupTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupTableComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
