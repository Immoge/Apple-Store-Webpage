import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductDetail } from '../../models/product-details.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail!: ProductDetail;
  selectedMemoryOption: string = '';
  selectedStorageOption: string = '';
  selectedAdapterOption: string = '';
  memoryOptions = [
    { label: '8GB unified memory', price: 0 },
    { label: '16GB unified memory', price: 800 },
    { label: '24GB unified memory', price: 1600 }
  ];
  storageOptions = [
    { label: '512GB SSD storage', price: 0 },
    { label: '1TB SSD storage', price: 800 },
    { label: '2TB SSD storage', price: 2400 },
    { label: '4TB SSD storage', price: 4800 },
    { label: '8TB SSD storage', price: 9600 }
  ];
  adapterOptions = [
    { label: '70W USB-C Power Adapter', price: 0 },
    { label: '96W USB-C Power Adapter', price: 80 }
  ];
  totalPrice: number = 0;
  monthlyInstallment: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe(data => {
        this.productDetail = data;
        this.totalPrice = this.productDetail.price; // Initialize total price with base price
        this.selectedMemoryOption = this.productDetail.memory + ' unified memory'; // Set selectedMemoryOption based on product memory
        this.selectedStorageOption = this.storageOptions.find(option => option.label.includes(this.productDetail.storage))?.label || this.storageOptions[0].label; // Set selectedStorageOption based on product storage or default to the first storage option
        this.selectedAdapterOption = this.productDetail.powerAdapter; // Set selectedAdapterOption based on product power adapter
        this.updateTotalPrice();
        this.updateMonthlyInstallment();
      });
    }
  }

  selectMemoryOption(option: { label: string, price: number }): void {
    this.selectedMemoryOption = option.label;
    this.updateTotalPrice();
    this.updateMonthlyInstallment();
  }

  selectStorageOption(option: { label: string, price: number }): void {
    this.selectedStorageOption = option.label;
    this.updateTotalPrice();
    this.updateMonthlyInstallment();
  }

  selectAdapterOption(option: { label: string, price: number }): void {
    this.selectedAdapterOption = option.label;
    this.updateTotalPrice();
    this.updateMonthlyInstallment();
  }

  updateTotalPrice(): void {
    const selectedMemoryOption = this.memoryOptions.find(option => option.label === this.selectedMemoryOption);
    const selectedStorageOption = this.storageOptions.find(option => option.label === this.selectedStorageOption);
    const selectedAdapterOption = this.adapterOptions.find(option => option.label === this.selectedAdapterOption);
    if (selectedMemoryOption && selectedStorageOption && selectedAdapterOption) {
      this.totalPrice = this.productDetail.price + selectedMemoryOption.price + selectedStorageOption.price + selectedAdapterOption.price;
    }
  }

  getMemoryOptionPrice(option: { label: string, price: number }): string {
    const selectedOption = this.memoryOptions.find(opt => opt.label === this.selectedMemoryOption);
    if (selectedOption) {
      const priceDifference = option.price - selectedOption.price;
      return `${priceDifference >= 0 ? '+' : '-'} RM ${Math.abs(priceDifference).toFixed(2)}`;
    }
    return `+ RM ${option.price.toFixed(2)}`;
  }

  getStorageOptionPrice(option: { label: string, price: number }): string {
    const selectedOption = this.storageOptions.find(opt => opt.label === this.selectedStorageOption);
    if (selectedOption) {
      const priceDifference = option.price - selectedOption.price;
      return `${priceDifference >= 0 ? '+' : '-'} RM ${Math.abs(priceDifference).toFixed(2)}`;
    }
    return `+ RM ${option.price.toFixed(2)}`;
  }

  getAdapterOptionPrice(option: { label: string, price: number }): string {
    const selectedOption = this.adapterOptions.find(opt => opt.label === this.selectedAdapterOption);
    if (selectedOption) {
      const priceDifference = option.price - selectedOption.price;
      return `${priceDifference >= 0 ? '+' : '-'} RM ${Math.abs(priceDifference).toFixed(2)}`;
    }
    return `+ RM ${option.price.toFixed(2)}`;
  }

  updateMonthlyInstallment(): void {
    this.monthlyInstallment = this.totalPrice / 24;
  }

}