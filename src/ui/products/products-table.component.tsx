import { Product } from './product.schema';
import { ProductColumns } from './columns/product.columns';
import { DataTable } from '../data-table/data-table.component';
import { AddProductDialog } from './forms/add-product-dialog.component';

type ProductsTableProps = {
  products: Product[];
};

export function ProductsTable({ products }: ProductsTableProps) {
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={ProductColumns}
        initialData={products}
        addItemForm={(table) => <AddProductDialog table={table} />}
      />
    </div>
  );
}
