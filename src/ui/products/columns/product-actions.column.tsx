import { DisplayColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { ProductActions } from '../product-actions.component';

export const ProductActionsColumn: DisplayColumnDef<Product, void> = {
  id: 'actions',
  cell: ({ row, table }) => {
    return <ProductActions productId={row.original.id} table={table} />;
  }
};
