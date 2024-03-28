import { useState } from 'react';
import { Product } from './product.schema';
import { ProductColumns } from './columns/product.columns';
import { DataTable } from '../data-table/data-table.component';

type ProductsTableProps = {
  products: Product[];
};

export function ProductsTable({ products }: ProductsTableProps) {
  const [data] = useState<Product[]>(products);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={ProductColumns} data={data} />
    </div>
  );
}
