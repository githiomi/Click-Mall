import { Component } from '@angular/core';

// Interface import
import { Product } from '../../models/Product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  product: Product = {
    itemName: "Keyboard",
    itemCounter: 2,
    itemPrice: 10.57
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
