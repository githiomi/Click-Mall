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
  cart = new BehaviorSubject<Cart>(
    {
      cartItems: [
        // Start with the empty cart
      ]
    }
  )


  constructor(
    // For the snack bar component to inform that a new item has been added
    private snackBar: MatSnackBar
  ) { }

  // Method that will update the cart with the new product
  addProductToCart(cartItem: CartItem): void {

    // We don't interfere with the old array, so we create a new array
    const currentCart = [...this.cart.value.cartItems];

    const productInCart = currentCart.find(item => item.id === cartItem.id);

    // If product is in cart, then update the quantity
    if (productInCart) {
      // Update the quantity
      console.log("Updating quantity");
      productInCart.quantity += 1;
    }
    else {
      // Add the product to the cart
      console.log("Pushing new product to cart");
      currentCart.push(cartItem);
    }

    // We then emit the new product so that all subscribers can catch it
    this.cart.next({ cartItems: currentCart })

    // Then show the Snack bar
    if (productInCart) {
      this.snackBar.open(
        `One more ${cartItem.name} has been added to the cart`,
        'Close',
        {
          duration: 3000
        }
      )
    } else {
      this.snackBar.open(
        `${cartItem.name} has been added to the cart`,
        'Close',
        {
          duration: 3000
        }
      )
    }

  }

  // Method to calculate the total cost of items added to the cart
  getCartTotal(cartItems: Array<CartItem>): number {

    return cartItems
      .map(item => item.price * item.quantity)
      .reduce((previousSum, currentSum) => previousSum + currentSum, 0)

  }

  // MEthod to remove all items from the cart and empty the cart
  emptyCart(): void {
    // Reset the cart being emitted
    this.cart.next(
      { cartItems: [] }
    );

    // Show snackbar to inform the user
    this.snackBar.open(
      "Your cart has successfully been cleared",
      'Close',
      {
        duration: 2000
      }
    );

  }

  // Service method to remove one specific item from the cart
  removeCartItem(item: CartItem, notify = true): CartItem[] {

    const filteredItems = this.cart.value.cartItems.filter(
      _item => _item.id !== item.id
    );

    if (notify) {
      this.cart.next({ cartItems: filteredItems });
      this.snackBar.open(
        `${item.name} has been removed from your cart`,
        'Ok',
        {
          duration: 3000,
        });
    }

    return filteredItems;
  }

  // Method call to reduce the quantity of an item in the cart
  reduceItemQuantity(cartItem: CartItem): void {

    // The item to be reduce quantity or removed
    let itemForRemoval !: CartItem | undefined;

    // Loop through the array to find the item that we want to reduce the quantity
    let filteredItems = this.cart.value.cartItems
      .map(
        _cartItem => {
          if (_cartItem.id === cartItem.id) {
            // If the cart item we passed in matches the item in the cart
            // Reduce its quantity
            _cartItem.quantity--;

            // Check if the item quantity has reached 0
            if (_cartItem.quantity === 0) {
              itemForRemoval = _cartItem;
            }
          }

          // We can then return the new mapped item list
          return _cartItem;

        }
      );

    // If itemForRemoval is set, then remove it from the cart
    if (itemForRemoval) {
      console.log(itemForRemoval);
      filteredItems = this.removeCartItem(itemForRemoval, false);
    };

    // Then update the emitted cart object
    console.log('Filtered items: ' + filteredItems);
    this.cart.next({
      cartItems: filteredItems
    });

    // Inform user of the quantity decrease
    this.snackBar.open(
      `One ${cartItem.name} has been removed from the cart`,
      'Dismiss',
      {
        duration: 3000
      }
    );

  }

}
