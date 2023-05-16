import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imported Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// HTTP Modules imports
import { HttpClientModule } from '@angular/common/http';

// Imported Material Library Modules
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// Imported Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsHeaderComponent } from './components/pages/home/components/products-header/products-header.component';
import { FiltersComponent } from './components/pages/home/components/filters/filters.component';
import { ProductItemComponent } from './components/pages/home/components/product-item/product-item.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ErrorComponent } from './components/pages/error/error.component';

// Services Imports
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductItemComponent,
    CartComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // --- Custom Moudules ---
    // HTTP Client
    HttpClientModule,
    // For the Side Navigation Menu
    MatSidenavModule,
    // For the grid placement
    MatGridListModule,
    // For the dropdown menus
    MatMenuModule,
    // For the buttons
    MatButtonModule,
    // For product cards
    MatCardModule,
    // For various icons
    MatIconModule,
    // To expand menu lists
    MatExpansionModule,
    // For the left menu
    MatListModule,
    // For the common navigation toolbar
    MatToolbarModule,
    // For the table in the card page
    MatTableModule,
    // For the badge on the car
    MatBadgeModule,
    // To notify the user
    MatSnackBarModule
  ],
  providers: [
    // For the cart service
    CartService,
    // For the product service
    StoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
