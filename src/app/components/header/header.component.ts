import { Component } from '@angular/core';

// Interface import
import { CartItem } from 'src/app/models/Cart-Item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // To keep track of all the products in the cart
  cartCounter: number = 1;

  product: CartItem = {
    product: 'http://via.placeholder.com/150',
    name: 'Laptop Stand',
    price: 270,
    quantity: 1,
    id: 2
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
