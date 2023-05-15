import { Injectable, OnInit } from '@angular/core';

// Interface imports
// To map the data returned from the API
import { Product } from '../models/Product';

// Import for the HTTP Client to amke network requests
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// The BASE URL
const FAKESTORE_BASE_URL = 'https://www.fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {

  constructor(
    // Client to make HTTP requests
    private _httpClient: HttpClient) { }

  ngOnInit() {

  }

  // Mrthod to get all products from the API call
  getAllProducts(productLimit: number = 12, sortOrder: string = 'desc'): Observable<Array<Product>> {

    // Make the HTTP request to get the array of products
    // We will subscribe to this
    return this._httpClient.get<Array<Product>>(
      `${FAKESTORE_BASE_URL}/products?limit=${productLimit}&sort=${sortOrder}`
    );

  }
}
