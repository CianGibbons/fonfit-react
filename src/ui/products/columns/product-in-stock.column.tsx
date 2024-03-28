import { AccessorColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { DataTableColumnHeader } from '@/ui/data-table/data-table-header.component';

export const ProductInStockColumn: AccessorColumnDef<Product, number> = {
  accessorKey: 'in_stock',
  sortingFn: 'alphanumeric',
  header: ({ column }) => {
    return <DataTableColumnHeader column={column} title="In Stock" />;
  }
};
