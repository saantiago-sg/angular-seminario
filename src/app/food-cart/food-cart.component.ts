import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { FoodCartService } from '../food-cart.service';
import { Food } from '../food-list/food';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {

  cartList$: Observable<Food[]>;

  constructor(private cart: FoodCartService) {
    this.cartList$ = cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

}
