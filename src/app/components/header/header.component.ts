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

  // To keep track of all the products in the cart
  cartCounter: number = 0;  // Starts at 0

  product: CartItem = {
    product: 'http://via.placeholder.com/150',
    name: 'Laptop Stand',
    price: 270,
    quantity: 1,
    id: 2
  }

  constructor(
    // Inject the cart service
    private cartService: CartService
  ) {}

  // Getters and setters
  @Input() getCurrentCart(){
    return this._currentCart;
  }

  setCurrentCart(cart : Cart) : void{
    this._currentCart = cart;
  }

  // Method call to get cart total
  getCartTotal() {
    return 10.57 * 2;
  }

  // Method call to clear cart
  clearCart() {
    confirm("Are you sure you want to clear the cart?");
  }

  // Method to checkout the cart
  checkoutCart() {
    confirm("Are you sure you want to checkout the cart?");
  }

}
