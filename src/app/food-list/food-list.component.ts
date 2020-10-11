import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  food = {
    "image" : "assets/img/muza.jpg",
    "nombre" : "Muzarella",
    "precio" : "240",
    "stock" : 6
  }

  constructor() { }

  ngOnInit(): void {
  }

}
