import { Component, OnInit } from '@angular/core';

// Interface imports
import { Cart } from './models/Cart';

// Service imports
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  // This is to pass the cart to the 'header' component
  cart : Cart = {
    cartItems : [] // Init the cart to an empty array
  }

  constructor(
    // Inject the cart service
    private _cartService: CartService
  ){}

  ngOnInit(): void {

    // When the component is initialized, initialize the service and subscribe to it
    this._cartService.cart.subscribe(
      ( _cart ) => {
        // It returns a cart object which we assign locally
        this.cart = _cart;
      }
    )
    
  }
  
}
