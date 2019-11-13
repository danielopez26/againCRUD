import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ClientesComponent } from './components/clientes/clientes.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'cliente', component: ClienteComponent },
  {path: 'producto', component: ProductoComponent },
  {path: 'clientes/:nit', component: ClientesComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const AppRoutingModule = RouterModule.forRoot(routes, {useHash: true});
