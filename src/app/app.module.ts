import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';

import { FormsModule } from '@angular/forms';
import { FoodContactoComponent } from './food-contacto/food-contacto.component';
import { FoodFastComponent } from './food-fast/food-fast.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodContactoComponent,
    FoodFastComponent,
    FoodCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
