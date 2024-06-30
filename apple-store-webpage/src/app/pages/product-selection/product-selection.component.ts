import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css']
})
export class ProductSelectionComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedSize: string = '14-inch';
  selectedChip: string = 'All';
  isScrolledDown: boolean = false;

  @ViewChild('sizeButtonSection') sizeButtonSection!: ElementRef;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filterProducts();
    });
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      return (this.selectedSize === 'All' || product.size === this.selectedSize) &&
             (this.selectedChip === 'All' || product.chip === this.selectedChip);
    });
  }

  selectSize(size: string): void {
    this.selectedSize = size;
    this.filterProducts();
  }

  selectChip(chip: string): void {
    this.selectedChip = chip;
    this.filterProducts();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    this.isScrolledDown = window.pageYOffset > this.sizeButtonSection.nativeElement.offsetTop;
  }
}