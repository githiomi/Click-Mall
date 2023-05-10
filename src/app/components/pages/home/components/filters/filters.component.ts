import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  // Data Binding
  // Emitters
  @Output() categoryFilterEmitter = new EventEmitter<string>();

  // To keep track of the filter categories
  filterCategories: string[] = [

    "Shoes",
    "Jackets",
    "Dresses",
    "Socks"

  ]
 
  constructor(){

  }

  // Method to emit the selected category to the parent 'home' component
  categoryFilterSelected(categoryFilter: string){

    // Emit the selected category to filter page content
    this.categoryFilterEmitter.emit(categoryFilter);

  }
}
