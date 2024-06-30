import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ProductDetail } from '../models/product-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataUrl = 'assets/data/product.json';
  private detailDataUrl = 'assets/data/product-details.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProductById(id: string): Observable<ProductDetail> {
    return this.http.get<ProductDetail[]>(this.detailDataUrl)
      .pipe(
        map((productDetail: ProductDetail[]) => productDetail.find(productDetail => productDetail.id === id)!)
      );
  }
}