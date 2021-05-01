import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuAccountComponent } from './main-menu-account.component';

describe('MainMenuAccountComponent', () => {
  let component: MainMenuAccountComponent;
  let fixture: ComponentFixture<MainMenuAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenuAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
