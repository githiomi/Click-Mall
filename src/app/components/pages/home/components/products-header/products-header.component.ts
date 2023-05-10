import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {

  // Data Binding
  // Emitters
  @Output() columnNumberEmitter : EventEmitter<number> = new EventEmitter<number>();

  // To keep track of the sort order
  sortOrder: string = 'desc';

  // To keep track of the total number of products
  totalProducts: number = 12;

  constructor() { }

  // Method to update the sort order
  updateSortOrder(newOrder: string): void {
    this.sortOrder = newOrder;
  }

  // Method to update the total number of items
  updateTotalItemsCounter(newItemCounter: number): void {
    this.totalProducts = newItemCounter;
  }

  // To update the number of columns in a row of products
  updateColumnsNumber(newColumns: number): void {
    // Emit the new number of columns to the 'header' parent
    this.columnNumberEmitter.emit(newColumns);
  }

}
