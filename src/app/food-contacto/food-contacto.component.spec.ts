import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodContactoComponent } from './food-contacto.component';

describe('FoodContactoComponent', () => {
  let component: FoodContactoComponent;
  let fixture: ComponentFixture<FoodContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
