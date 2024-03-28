import { AccessorColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { DataTableColumnHeader } from '@/ui/data-table/data-table-header.component';

export const ProductCategoryColumn: AccessorColumnDef<Product, string> = {
  accessorKey: 'category',
  enableSorting: false,
  header: ({ column }) => {
    return <DataTableColumnHeader column={column} title="Category" />;
  }
};
