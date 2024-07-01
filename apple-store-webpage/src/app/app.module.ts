import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductSelectionComponent } from './pages/product-selection/product-selection.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PopoutComponent } from './components/popout/popout.component'; // Import PopoutComponent
import { PopoutService } from './services/popout.service'; // Import PopoutService

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductSelectionComponent,
    ProductDetailComponent,
    ProductCardComponent,
    PopoutComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [PopoutService], 
  bootstrap: [AppComponent]
})
export class AppModule { }