import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {path:'', redirectTo:'productdetails', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'productdetails', component:ProductDetailsComponent},
  {path:'productdetails/cart/:id',component:CartComponent},
  {path:'profile',component:ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
