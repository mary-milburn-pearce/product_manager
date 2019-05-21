import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home',component: WelcomeComponent },
  { path: 'products',component: ProductsComponent },
  { path: 'products/new',component: ProdAddComponent },
  { path: 'products/edit/:id', component: ProdEditComponent },
  // redirect to /home if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  // the ** will catch anything that did not match any of the above routes
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
