import { Component, Input } from '@angular/core';

// Interface import
import { CartItem } from 'src/app/models/Cart-Item';
import { Cart } from 'src/app/models/Cart';

// Injectable service
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private _currentCart : Cart = {
    cartItems : []
  }
  
  // Getters and setters
  @Input() 
  get currentCart() : Cart{
    return this._currentCart;
  }

  set currentCart(cart : Cart){
    this._currentCart = cart;

    // Everytime we set the cart, we update the number of items in the cart
    this.cartCounter = cart.cartItems
                            .map ( cartItem => cartItem.quantity)
                            .reduce((previousCount, currentCount) => previousCount + currentCount, 0);
  }

  product : CartItem = {
    product: 'https://via.placeholder.com/150',
    name: 'Samsung Galaxy Book 2 Pro',
    price: 1200,
    quantity: 1,
    id: 1
  }

  // To keep track of all the products in the cart
  cartCounter: number = 0;  // Starts at 0 by default

  constructor(
    // Inject the cart service
    private _cartService: CartService
  ) {}


  // Method call to get cart total
  getCartTotal() {
    return 10.57 * 2;
  }

  // Method call to clear cart
  clearCart() : void {
    let confirmClear = confirm("Are you sure you want to clear the cart?");

    if (confirmClear) {
      // If the user consents to clear the cart

    }else {
      // Consent is not given to clear the cart
      return;
    }
  }

  // Method to checkout the cart
  checkoutCart() {
    const confirmCheckout = confirm("Are you sure you want to checkout the cart?");

    if (confirmCheckout) {
      // If the user consents to clear the cart

    }else {
      // Consent is not given to clear the cart
      return;
    }
  }

}
