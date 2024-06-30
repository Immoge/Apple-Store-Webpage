import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { PopoutService } from '../../services/popout.service'; // Ensure correct path

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  selectedColorImageUrl!: string;
  selectedColorName!: string;
  chipIconUrl!: string;
  
  private colorMap: { [key: string]: string } = {
    'Space Grey': '#707070',
    'Silver': '#E3E4E6'
  };

  constructor(public popoutService: PopoutService) {} 

  ngOnInit(): void {
    this.selectedColorImageUrl = this.product.imageUrl;
    this.selectedColorName = this.product.colors[0].name; 
    this.updateChipIcon(); 
  }

  selectColor(color: { name: string, imageUrl: string }): void {
    this.selectedColorImageUrl = color.imageUrl;
    this.selectedColorName = color.name;
  }

  updateChipIcon(): void {
    if (this.product.chip === 'M3 Max') {
      this.chipIconUrl = 'assets/images/m3-max-logo.png';
    } else if (this.product.chip === 'M3 Pro') {
      this.chipIconUrl = 'assets/images/m3-pro-logo.png';
    } else {
      this.chipIconUrl = 'assets/images/m3-logo.png';
    }
  }
  
  getColor(colorName: string): string {
    return this.colorMap[colorName] || '#ffffff'; 
  }

  showPopout(): void {
    this.popoutService.show();
  }
}