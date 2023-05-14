import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components imported for routing
import { HomeComponent } from './components/pages/home/home.component';
import { CartComponent } from './components/pages/cart/cart.component';

const routes: Routes = [
  // Application Routes

  {
    // Home route
    path: 'home',
    component: HomeComponent,
    title: 'Click Mall Homepage'
  },
  {
    // Cart route
    path: 'cart',
    component: CartComponent,
    title: 'Your Click Mall Cart'
  },
  {
    // Setting the default route for rerouting
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
