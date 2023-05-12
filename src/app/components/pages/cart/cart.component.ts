import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartItem } from 'src/app/models/Cart-Item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  // To hold the products kept in the cart
  cart: Cart = {
    cartItems: [

      {
        imageUrl: 'https://via.placeholder.com/150',
        name: 'Nike AirForce 1',
        price: 150,
        quantity: 2,
        id: 1
      },
      {
        imageUrl: 'https://via.placeholder.com/150',
        name: 'Nike AirForce 2',
        price: 970,
        quantity: 2,
        id: 2
      },
      {
        imageUrl: 'https://via.placeholder.com/150',
        name: 'Nike AirForce 3',
        price: 350,
        quantity: 2,
        id: 3
      }

    ]
  };

  // To store the products data from the API
  cartDataSource : Array <CartItem> = [];

  constructor(){

  }

  // To call when the component initializes
  ngOnInit(): void {
      // Set the cart items to the dta source
      // this.cartDataSource = this.cart.cartItems; b
  }

  // List of cart column headers
  cartColumnHeaders : Array<string> = [
    'Image',
    'Name',
    'Price',
    'Quantity',
    'Total',
    'Actions'
  ]

}
