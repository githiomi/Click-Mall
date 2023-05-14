import { Component, Input } from '@angular/core';

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

  // Product Placeholder
  product: Product = {
    productId: 1,
    productName: 'Nike Airforce 1',
    productPrice: 270,
    productImageUrl: 'https://via.placeholder.com/150',
    productCategory: 'Shoes',
    productDescription: 'These are the collest shoes on the block!'
  }

  // To check if the product is in full width mode
  isInFullWidthMode(): boolean {
    return this.productFullWidth;
  }

}
