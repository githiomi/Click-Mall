import { Component } from '@angular/core';

// Import the product interface class
import { Product } from '../../../models/Product';


// Row Mapper to match each column selection with a row
const ROW_HEIGHT : { [column:number] : number } = {

  // If there i only 1 column, row height = 400px
  1:400,
  // Columns = 3, Row Height = 335
  2:335,
  // Columns = 4, Row Height = 350
  3:350
  
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // To keep track of the number of products per row
  productColumns : number = 3;

  // To keep track of the number of rows
  rowHeight : number = ROW_HEIGHT[this.productColumns];

  // To keep track of the category filter
  categoryFilter : string | undefined;

  constructor(){

  }

  // MEthod to check whether the listed products are in full width mode or not
  isInFullWidth() : boolean {
    return this.productColumns === 1;
  }

  // Method that will be triggered when the user clicks any change layout icon
  changeColumnsLayout(newProductColumns:number) : void {
    console.log(`Changed Columns Layout number to ${newProductColumns}`);
    this.productColumns = newProductColumns;

    // To also update the row height based on the new number of columns
    this.rowHeight = ROW_HEIGHT[newProductColumns]
  }

  // Method triggered when the user filters products by category
  filterProductsByCategory(categorySelected : any) : void{
    console.log(`You selected the ${categorySelected}`);
    this.categoryFilter = categorySelected;
  }

  // To catch the product emitted by the 'product-item' class and update the service
  addProductToCart(addedProduct : Product) : void {
  }

}
