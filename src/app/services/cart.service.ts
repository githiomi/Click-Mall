import { Injectable } from '@angular/core';

// To import the snackbar material from angular
import { MatSnackBar } from '@angular/material/snack-bar';

// To handle the cart items
import { BehaviorSubject } from 'rxjs';

// The interfaces imports
import { Product } from '../models/Product';
import { Cart } from '../models/Cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  // This is the property that will hold all the cart items
  // We can subscribe to the subject to get changes when they occur
  cart = new BehaviorSubject<Cart> (
    {
      cartItems : []
    }
  )


  constructor(
    // For the snack bar component to inform that a new item has been added
    private snackBar : MatSnackBar
  ) { }

  // Method that will update the cart with the new product
  addProductToCart(product : Product) : void {

    // We don't interfere with the old array, so we create a new array
    const currentCart = [...this.cart.value.cartItems];

    // To check if there is ALREADY a similiar product in the cart
    const itemsInCart = currentCart.find(
      item => {
        item.productId === product.productId
      }
    )

  }
}
