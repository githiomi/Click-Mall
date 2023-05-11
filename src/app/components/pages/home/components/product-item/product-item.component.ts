import { Component } from '@angular/core';

// The Product interface
import { Product } from '../../../../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  // Product Placeholder
  product: Product = {
    itemName: 'Nike AirForce 1',
    itemCounter: 0,
    itemPrice: 150
  }


}
