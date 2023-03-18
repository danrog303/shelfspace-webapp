import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthInterceptor } from "./interceptors/authentication.interceptor";
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { ShelfComponent } from './components/shelves/shelf/shelf.component';
import { ShelfDisplayComponent } from "./components/shelves/shelf-display/shelf-display.component";
import { SpinnerComponent } from "./components/common/spinner/spinner";
import { ShelfEditComponent } from "./components/shelves/shelf-edit/shelf-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShelfDetailsComponent } from './components/shelves/shelf-details/shelf-details.component';
import { ShelfDeleteComponent } from './components/shelves/shelf-delete/shelf-delete.component';
import { ShelfItemEditComponent } from './components/shelves/shelf-item-edit/shelf-item-edit.component';
import { ShelfItemDeleteComponent } from './components/shelves/shelf-item-delete/shelf-item-delete.component';
import { ConfirmationModalComponent } from './components/common/confirmation-modal/confirmation-modal.component';
import { ErrorAlertComponent } from './components/common/error-alert/error-alert.component';
import { ErrorIconComponent } from './components/common/icons/error-icon.component';
import {HamburgerIconComponent} from "./components/common/icons/hamburger-icon.component";
import {AddIconComponent} from "./components/common/icons/add-icon.component";
import {DeleteIconComponent} from "./components/common/icons/delete-icon.component";
import {EditIconComponent} from "./components/common/icons/edit-icon.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomepageComponent,
    NavbarComponent,
    ShelfComponent,
    ShelfDisplayComponent,
    SpinnerComponent,
    ShelfEditComponent,
    ShelfDetailsComponent,
    ShelfDeleteComponent,
    ShelfItemEditComponent,
    ShelfItemDeleteComponent,
    ConfirmationModalComponent,
    ErrorAlertComponent,
    ErrorIconComponent,
    HamburgerIconComponent,
    AddIconComponent,
    DeleteIconComponent,
    EditIconComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
