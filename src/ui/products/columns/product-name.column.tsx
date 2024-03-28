import { AccessorColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { DataTableColumnHeader } from '@/ui/data-table/data-table-header.component';

export const ProductNameColumn: AccessorColumnDef<Product, string> = {
  accessorKey: 'name',
  sortingFn: 'alphanumeric',
  header: ({ column }) => {
    return <DataTableColumnHeader column={column} title="Name" />;
  }
};
