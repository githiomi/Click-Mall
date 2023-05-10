import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imported Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // --- Custom Moudules
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
