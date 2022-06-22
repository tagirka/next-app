import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductType } from "../../interfaces/product.type";

export interface CardHandler
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  product: ProductType;
}
