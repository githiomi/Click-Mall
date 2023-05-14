import { Component } from '@angular/core';

// Interface import
import { Product } from '../../models/Product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // To keep track of all the products in the cart
  cartCounter: number = 3;

  product: Product = {
    productId: 1,
    productName: 'Nike Airforce 1',
    productPrice: 270,
    productQuantity: 1,
    productImageUrl: 'https://via.placeholder.com/150',
    productCategory: 'Shoes',
    productDescription: 'These are the collest shoes on the block!'
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
