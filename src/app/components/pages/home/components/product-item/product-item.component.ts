import { Component, EventEmitter, Input, Output } from '@angular/core';

// The Product interface
import { Product } from '../../../../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  // To get the number of columns from the parent 'home' component to alter product item layout
  @Input() productFullWidth: boolean = false;

  // To emitt the selected product
  @Output() addProductToCartEmitter : EventEmitter<Product> = new EventEmitter<Product>();

  // Product Placeholder
  product: Product = {
    productId: 3,
    productName: 'Samsung Galaxy Book 2 Pro',
    productPrice: 1270,
    productQuantity: 1,
    productImageUrl: 'https://via.placeholder.com/150',
    productCategory: 'Laptop',
    productDescription: 'These are the collest shoes on the block! You should get one'
  }

  // To check if the product is in full width mode
  isInFullWidthMode(): boolean {
    return this.productFullWidth;
  }

  // Method that will add the product to the user's cart
  addProductToCart() : void {
    this.addProductToCartEmitter.emit(this.product);
  }

}
