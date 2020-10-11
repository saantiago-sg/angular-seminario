import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';
import { Food } from './food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods : Food[] = [ 
  {
    image : "assets/img/muza.jpg",
    nombre : "Muzarella",
    precio : 240,
    vegana : "si",
    stock : 6,
    oferta : false,
  },
  {
    image : "assets/img/muza.jpg",
    nombre : "Rompe corazones",
    precio : 200,
    vegana : "si",
    stock : 0,
    oferta : true,
  },
  {
    image : "assets/img/muza.jpg",
    nombre : "Homero pizza",
    precio : 499,
    vegana : "no",
    stock : 1,
    oferta : false,
  },
  {
    image : "assets/img/muza.jpg",
    nombre : "Suprema pizza",
    precio : 550,
    vegana : "no",
    stock : 0,
    oferta : true,
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
