import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';

import { SetPasswordComponent } from './set-password/set-password.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ViewSpecificProductComponent } from './view-specific-product/view-specific-product.component';
import { WeatherComponentComponent } from './weather-component/weather-component.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "viewProductById/:id", component: ViewSpecificProductComponent },
  { path: "userdashboard", component: UserDashboardComponent },
  { path: "register", component: UserRegistrationComponent },
  { path: "update/:id", component: UpdateUserComponent },
  { path: "userprofile", component: UserProfileComponent },


  { path: "productdashboard", component: ProductDashboardComponent },
  { path: "productById/:id", component: ProductDetailsComponent },
  { path: "updateProductById/:id", component: UpdateProductComponent },
  { path: "deleteProductById/:id", component: DeleteProductComponent },
  { path: "saveProductDetails", component: ProductRegistrationComponent },

  { path: "login", component: LoginComponent },
  { path: "forgotpass", component: SetPasswordComponent },
  { path: "logout", component: LogoutComponent },
  { path: "weather", component: WeatherComponentComponent },

  { path: "updateMyCart/:id", component: UpdateCartComponent },
  { path: "myCart", component: MyCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
