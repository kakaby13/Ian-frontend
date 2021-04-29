import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupTableItemComponentComponent } from './startup-table-item-component.component';

describe('StartupTableItemComponentComponent', () => {
  let component: StartupTableItemComponentComponent;
  let fixture: ComponentFixture<StartupTableItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupTableItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupTableItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
