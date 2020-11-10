import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from './food-list/food';


  // MANEJO LA LOGICA DEL CARRITO, add food

@Injectable({
  providedIn: 'root'
})

export class FoodCartService {

  private _cartList: Food[] = []; // el _ por standar
  cartList: BehaviorSubject<Food[]> = new BehaviorSubject([]); //observable

  constructor() { }

  addToCart(food: Food) {
   let item: Food = this._cartList.find((v1) => v1.nombre == food.nombre);
    if(!item){
      this._cartList.push({ ... food}); //clono el objeto
      // console.log(this._cartList.length);
    } else{
      item.cantidad += food.cantidad;
    }
    this.cartList.next(this._cartList); //actualiza el valor de la var privada cartlist
  }

}
