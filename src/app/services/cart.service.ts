import { Injectable } from '@angular/core';

// To import the snackbar material from angular
import { MatSnackBar } from '@angular/material/snack-bar';

// To handle the cart items
import { BehaviorSubject } from 'rxjs';

// The interfaces imports
import { Cart } from '../models/Cart';
import { CartItem } from '../models/Cart-Item';


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
  addProductToCart(cartItem : CartItem) : void {

    // We don't interfere with the old array, so we create a new array
    const currentCart = [...this.cart.value.cartItems];

    const productInCart = currentCart.find(item => item.id === cartItem.id);

    // If product is in cart, then update the quantity
    if ( productInCart ) {
      // Update the quantity
      console.log("Updating quantity");
      productInCart.quantity += 1;
    }
    else{
      // Add the product to the cart
      console.log("Pushing new product to cart");
      currentCart.push(cartItem);
    }

    // We then emit the new product so that all subscribers can catch it
    this.cart.next({cartItems: currentCart})

    // Then show the Snack bar
    if ( productInCart ){
      this.snackBar.open(
        `One more ${cartItem.name} has been added to the cart`,
        'Close',
        {
          duration : 3000
        }
      )
    }else{
      this.snackBar.open(
        `${cartItem.name} has been added to the cart`,
        'Close',
        {
          duration : 3000
        }
      )
    }

    console.log(
      this.cart.value
    )
  }

  // Method to calculate the total cost of items added to the cart
  getCartTotal (cartItems : Array<CartItem>) : number {

    return cartItems
                    .map(item => item.price * item.quantity)
                    .reduce( (previousSum, currentSum) => previousSum + currentSum, 0)    

  }
}
