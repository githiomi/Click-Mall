import { Component, OnInit, OnDestroy } from '@angular/core';

// Import the product interface class
import { Product } from '../../../models/Product';

// Import the cart service
import { CartService } from '../../../services/cart.service';
// Product service
import { ProductsService } from '../../../services/products.service';

// Imports for the API call
import { Subscription } from 'rxjs';


// Row Mapper to match each column selection with a row
const ROW_HEIGHT: { [column: number]: number } = {

  // If there i only 1 column, row height = 400px
  1: 400,
  // Columns = 3, Row Height = 335
  2: 335,
  // Columns = 4, Row Height = 350
  3: 350

};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  // To keep track of the number of products per row
  productColumns: number = 3;

  // To keep track of the number of rows
  rowHeight: number = ROW_HEIGHT[this.productColumns];

  // To keep track of the category filter
  categoryFilter: string | undefined;

  // This will hold the products from the FakeStore API. Is undefined at the start
  products: Array<Product> | undefined;

  // Default limit and sort order values
  productLimit: number = 12;
  sortOrder: string = 'desc';

  // Product Subscription
  protected _productsSubscription: Subscription | undefined;

  constructor(
    // Inject the cart service
    private cartService: CartService,
    // Inject the product service to make API calls
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {

    // We make the API call here
    this.getProducts();

  }

  // Method call to get the products from the FakeStore API
  getProducts(): void {

    this._productsSubscription = this._productsService.getAllProducts
      // We pass in the sort and limit values to the products service method call
      (this.productLimit, this.sortOrder).subscribe(
        _products => {
          // We will get an array of products
          this.products = _products;
        }
      );
  }


  // MEthod to check whether the listed products are in full width mode or not
  isInFullWidth(): boolean {
    return this.productColumns === 1;
  }

  // Method that will be triggered when the user clicks any change layout icon
  changeColumnsLayout(newProductColumns: number): void {
    console.log(`Changed Columns Layout number to ${newProductColumns}`);
    this.productColumns = newProductColumns;

    // To also update the row height based on the new number of columns
    this.rowHeight = ROW_HEIGHT[newProductColumns]
  }

  // Method triggered when the user filters products by category
  filterProductsByCategory(categorySelected: any): void {
    console.log(`You selected the ${categorySelected}`);
    this.categoryFilter = categorySelected;
  }

  // To catch the product emitted by the 'product-item' class and update the service
  addProductToCart(addedProduct: Product): void {

    // Call the add product method from the service
    this.cartService.addProductToCart({
      price: addedProduct.productPrice,
      quantity: addedProduct.productQuantity,
      name: addedProduct.productName,
      id: addedProduct.productId,
      product: addedProduct.productImageUrl
    });

  }

  // OnDestroy unsubscribe from the ProductService Subscription
  ngOnDestroy(): void {

    // Check if the subscription is still active
    if (this._productsSubscription) {
      // This will help to control any memory leaks that may occur
      this._productsSubscription.unsubscribe();
    }
  }

}



// Hard Coded Product Data
    // {
    //   productId: 3,
    //   productName: 'Samsung Galaxy Book 2 Pro',
    //   productPrice: 1670,
    //   productQuantity: 1,
    //   productImageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/hk_en/feature/163944243/hk_en-feature-light--powerful--made-to-move-in-style-531376919?$FB_TYPE_A_MO_JPG$',
    //   productCategory: 'Laptop',
    //   productDescription: 'These thinnest and lightest laptop you can find!'
    // },
    // {
    //   productId: 1,
    //   productName: 'Dell XPS 13',
    //   productPrice: 1380,
    //   productQuantity: 1,
    //   productImageUrl: 'https://www.colbybrownphotography.com/wp-content/uploads/2018/03/XPS13-V2-768x477.jpg',
    //   productCategory: 'Laptop',
    //   productDescription: 'Small, Compact and Powerfull. Don\'t judge by the size!'
    // },
    // {
    //   productId: 2,
    //   productName: 'Apple MacBook Pro M2',
    //   productPrice: 2130,
    //   productQuantity: 1,
    //   productImageUrl: 'https://static.komputronik.pl/product-picture/6/LTAPLMNEH3ZE_R1_US-1.jpg',
    //   productCategory: 'Laptop',
    //   productDescription: 'The M2 chip starts the next generation of Apple silicon, with even more of the speed and power efficiency of M1'
    // },
    // {
    //   productId: 4,
    //   productName: 'Huawei Matebook 14 Pro',
    //   productPrice: 1412,
    //   productQuantity: 1,
    //   productImageUrl: 'https://hothardware.com/ContentImages/Article/2829/content/small_huawei-matebook-13-marketing-render.jpg',
    //   productCategory: 'Laptop',
    //   productDescription: 'A versatile device that has a fantastic display and intuitive controls, the latest flagship MateBook is easy to recommend'
    // }
