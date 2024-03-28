import { ProductCategoryColumn } from './product-category.column';
import { ProductDescriptionColumn } from './product-description.column';
import { ProductDiscountColumn } from './product-discount.column';
import { ProductImageColumn } from './product-image.column';
import { ProductInStockColumn } from './product-in-stock.column';
import { ProductNameColumn } from './product-name.column';
import { ProductPriceColumn } from './product-price.column';

export const ProductColumn = {
  Name: ProductNameColumn,
  Image: ProductImageColumn,
  Price: ProductPriceColumn,
  InStock: ProductInStockColumn,
  Discount: ProductDiscountColumn,
  Description: ProductDescriptionColumn,
  Category: ProductCategoryColumn
};
