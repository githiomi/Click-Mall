import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // To keep track of the number of products per row
  productColumns : number = 3;

  // To keep track of the category filter
  categoryFilter : string | undefined;

  constructor(){

  }

  // Method that will be triggered when the user clicks any change layout icon
  changeColumnsLayout(newProductColumns:number) : void {
    console.log(`Changed Columns Layout number to ${newProductColumns}`);
    this.productColumns = newProductColumns;
  }

  // Method triggered when the user filters products by category
  filterProductsByCategory(categorySelected : any) : void{
    console.log(`You selected the ${categorySelected}`);
    this.categoryFilter = categorySelected;
  }

}
