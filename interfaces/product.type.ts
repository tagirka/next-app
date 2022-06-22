export interface ProductOptionType {
  id: string;
  title: string;
}

export interface ProductType {
  id: string;
  title: string;
  src: string;
  listOptions: ProductOptionType[];
  weight: number;
  weightSymbol: string;
  description: string;
  disable: boolean;
}
