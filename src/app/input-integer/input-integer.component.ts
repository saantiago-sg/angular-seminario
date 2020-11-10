import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../food-list/food';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input() cantidad: number;
  @Input() max: number; // corchetes son datos de entrada [(cantidad)]
  @Output() cantidadChange: EventEmitter<number> = new EventEmitter<number>(); //parentesis son datos de salida
  @Output() cantidadMax: EventEmitter<string> = new EventEmitter<string>(); //parentesis son datos de salida


  ngOnInit(): void {
  }

  upCantidad():void{
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad); 
    }else{
      this.cantidadMax.emit("Cantidad maxima de stock alcanzada");
    }
  }

  downCantidad():void{  //tipo Food
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  onChangeCantidad(event):void{
    if(event.key > 0 && event.key < 9)
    event.preventDefault();
    this.cantidadChange.emit(this.cantidad);
  }
  
}
