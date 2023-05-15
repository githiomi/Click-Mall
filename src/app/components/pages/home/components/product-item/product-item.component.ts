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

  // To get the product item from the parent 'home' component
  @Input() product !: Product;

  // To emitt the selected product
  @Output() addProductToCartEmitter: EventEmitter<Product> = new EventEmitter<Product>();

  // To check if the product is in full width mode
  isInFullWidthMode(): boolean {
    return this.productFullWidth;
  }

  // Method that will add the product to the user's cart
  addProductToCart(): void {
    this.addProductToCartEmitter.emit(this.product);
  }

}
