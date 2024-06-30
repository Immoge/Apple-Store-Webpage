export interface Product {
  id: string;
  price: number;
  imageUrl: string;
  size: string;
  chip: string;
  colors: { name: string; imageUrl: string }[];
  specs: string[];
  features: string[];
}