import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartItem } from 'src/app/models/Cart-Item';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // To hold the products kept in the cart
  cart: Cart = {
    cartItems: [

      {
        productId: 1,
        productName: 'Dior Dior',
        productPrice: 1600,
        productImageUrl: 'https://via.placeholder.com/150',
        productCategory: 'Jackets',
        productDescription: 'These are the collest shoes on the block!'
      },
      {
        productId: 2,
        productName: 'Nike Airforce 1',
        productPrice: 270,
        productImageUrl: 'https://via.placeholder.com/150',
        productCategory: 'Shoes',
        productDescription: 'These are the collest shoes on the block!'
      }

    ]
  };

  // To store the products data from the API
  cartDataSource: Array<Product> = [];

  constructor() {
  }

  // To call when the component initializes
  ngOnInit(): void {
    // Set the cart items to the dta source
    this.cartDataSource = this.cart.cartItems;
  }

  // List of cart column headers
  cartColumnHeaders: Array<string> = [
    'Image',
    'Name',
    'Price',
    'Quantity',
    'Total',
    'Actions'
  ]

  // Method to calculate the total amount payable for items in the cart
  // getCartTotal(cartItems: Array<CartItem>): any {

  //   return cartItems.map(
  //     cartItem => {
  //       cartItem.price * cartItem.quantity
  //     }
  //   ).reduce(
  //     (previousValue, currentValue) => {
  //       previousValue + currentValue
  //     }, 0
  //   );

  // }

  // Method called when the clear cart items buttin is clicked
  clearCart(): void {
    confirm(`Are you sure you want to remove all ${this.cart.cartItems.length} items from the cart?`)
  }

  // To add the amount of an item in the cart
  addQuantity(cartItem: CartItem): void {
    cartItem.quantity += 1;
  }

  // To remove the amount of an item in the cart
  reduceQuantity(cartItem: CartItem): void {
    cartItem.quantity -= 1;
  }

}
