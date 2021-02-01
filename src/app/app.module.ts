import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserserviceService } from './userservice.service';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { ProductService } from './product.service';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { WeatherComponentComponent } from './weather-component/weather-component.component';
import { HomeComponent } from './home/home.component';
import { ViewSpecificProductComponent } from './view-specific-product/view-specific-product.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UpdateUserComponent,
    UserDashboardComponent,
    ProductRegistrationComponent,
    ProductDashboardComponent,
    ProductDetailsComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    HeaderComponent,
    FooterComponent,
    AdminPortalComponent,
    UserProfileComponent,
    LoginComponent,
    LogoutComponent,
    SetPasswordComponent,
    WeatherComponentComponent,
    HomeComponent,
    ViewSpecificProductComponent,
    MyCartComponent,
    UpdateCartComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UserserviceService, ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
