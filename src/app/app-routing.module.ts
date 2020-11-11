import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FoodComentariosComponent } from './food-comentarios/food-comentarios.component';
import { FoodContactoComponent } from './food-contacto/food-contacto.component';
import { FoodFastComponent } from './food-fast/food-fast.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'foods',
        pathMatch: 'full'
    },
    {
        path: 'foods',
        component: FoodFastComponent
    },
    {
        path: 'contactos',
        component: FoodContactoComponent
    },
    {
        path: 'comentarios',
        component: FoodComentariosComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }