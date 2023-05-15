import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components imported for routing
import { HomeComponent } from './components/pages/home/home.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ErrorComponent } from './components/pages/error/error.component';

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
  },
  {
    // Error page
    path: '**',
    component: ErrorComponent,
    title: 'Click Mall 404 Page Error'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
