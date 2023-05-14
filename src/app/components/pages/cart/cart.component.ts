import { Component, OnInit } from '@angular/core';

// Interface imports
import { Cart } from 'src/app/models/Cart';
import { CartItem } from 'src/app/models/Cart-Item';

// Service imports
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // To hold the products kept in the cart
  cart: Cart = {
    cartItems: [
      // Empty cart
    ]
  };

  // To store the products data from the API
  cartDataSource: Array<CartItem> = [];

  constructor(
    // Inject the cart service
    private _cartService: CartService
  ) {
  }

  // To call when the component initializes
  ngOnInit(): void {

    // Subscribe to the cart service to get the updated cart items
    this._cartService.cart.subscribe(
      (_cart : Cart) => {

        // Set the local cart to the cart item returned from the service
        this.cart = _cart;

        // Set the data source
        this.cartDataSource = this.cart.cartItems;

      }
    )
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
  getCartTotal(cartItems: Array<CartItem>): number {

    // Call method from the cart service
    return this._cartService.getCartTotal(cartItems); 

  }

  // Method called when the clear cart items buttin is clicked
  clearCart(): void {
    const confirmClear = confirm(`Are you sure you want to remove all ${this.cart.cartItems.length} items from the cart?`);

    // IF the user consents to remove all items from the cart
    if (confirmClear){
      // Clear the cart using the cart service
      this._cartService.emptyCart();
    }else {
      return;
    }
  }
  
  // Method to remove one cart item from the cart
  removeItemFromCart(cartItem: CartItem): void {
    this._cartService.removeCartItem(cartItem);
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
