import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFastComponent } from './food-fast.component';

describe('FoodFastComponent', () => {
  let component: FoodFastComponent;
  let fixture: ComponentFixture<FoodFastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodFastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
