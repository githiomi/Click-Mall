import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

// Import the Store Service to get all categories
import { StoreService } from '../../../../../services/store.service';

// Import the subscription controller
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent implements OnInit, OnDestroy {

  // Init the subscription
  protected _categoriesSubscription: Subscription | undefined;

  // Data Binding
  // Emitters
  @Output() categoryFilterEmitter = new EventEmitter<string>();

  // To keep track of the filter categories
  filterCategories: Array<string> = [
    // Empty Array to begin with
  ]

  constructor(
    // Inject the cart service to get the categories
    private _storeService: StoreService
  ) { }

  ngOnInit() {
    // Call the getAllCategories method on initialization
    this.getAllCategories()
  }

  // Method to get all the categories from the FakeStore API
  getAllCategories(): void {

    this._categoriesSubscription = this._storeService.getAllCategories().subscribe(
      _categories => {
        // Set the gotten categories to the local array
        console.log(`Categories: ${_categories}`);
        this.filterCategories = _categories;
      }
    )
  }

  // Method to emit the selected category to the parent 'home' component
  categoryFilterSelected(categoryFilter: string) {

    // Emit the selected category to filter page content
    this.categoryFilterEmitter.emit(categoryFilter);

  }

  // On Destroy, unsubscribe from the categories subscription
  ngOnDestroy() {

    // Check if the subscription exists
    if (this._categoriesSubscription) {
      this._categoriesSubscription.unsubscribe();
    }
  }
}
