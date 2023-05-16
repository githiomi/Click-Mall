import { Injectable } from '@angular/core';

// HTTP imports
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';


// The FAKE STORE API base URL
const FAKESTOREAPI_BASE_URL = 'http://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})

// This service is responsible for any API calls to the fakestore api
export class StoreService {

  constructor(
    // Get the HTTPClient
    private _httpClient: HttpClient
  ) { }

  // Method call to get all the products from the store
  // Will have the sort and limit parameters
  getAllProducts ( productLimit : number = 12, sortOrder : string = 'desc', categoryFilter ?: string ) : Observable<Array<Product>>{

    // We will then subscribe to this observable
    return this._httpClient.get<Array<Product>>(
      `${FAKESTOREAPI_BASE_URL}/products${categoryFilter ? '/category/' + categoryFilter : ''}?sort=${sortOrder}&limit=${productLimit}`);

  }

  getAllCategories () : Observable<Array<string>> {

    return this._httpClient.get<Array<string>> (
      `${FAKESTOREAPI_BASE_URL}/products/categories`
    );

  }

}
