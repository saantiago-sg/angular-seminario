import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodComentariosComponent } from './food-comentarios.component';

describe('FoodComentariosComponent', () => {
  let component: FoodComentariosComponent;
  let fixture: ComponentFixture<FoodComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
