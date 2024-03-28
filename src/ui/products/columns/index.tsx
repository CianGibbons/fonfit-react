import { ColumnDef } from '@tanstack/react-table';
import { ProductActionsColumn } from './product-actions.column';
import { ProductCategoryColumn } from './product-category.column';
import { ProductDescriptionColumn } from './product-description.column';
import { ProductDiscountColumn } from './product-discount.column';
import { ProductImageColumn } from './product-image.column';
import { ProductInStockColumn } from './product-in-stock.column';
import { ProductNameColumn } from './product-name.column';
import { ProductPriceColumn } from './product-price.column';
import { Product } from '../product.schema';

export const ProductColumn: Record<string, ColumnDef<Product, any>> = {
  Name: ProductNameColumn,
  Image: ProductImageColumn,
  Price: ProductPriceColumn,
  InStock: ProductInStockColumn,
  Discount: ProductDiscountColumn,
  Description: ProductDescriptionColumn,
  Category: ProductCategoryColumn,
  Actions: ProductActionsColumn
};
