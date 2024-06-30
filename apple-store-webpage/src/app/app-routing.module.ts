import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSelectionComponent } from './pages/product-selection/product-selection.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: ProductSelectionComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }