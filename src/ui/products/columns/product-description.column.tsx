import { AccessorColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { DataTableColumnHeader } from '@/ui/data-table/data-table-header.component';

export const ProductDescriptionColumn: AccessorColumnDef<Product, string> = {
  accessorKey: 'description',
  header: ({ column }) => {
    return <DataTableColumnHeader column={column} title="Description" />;
  }
};
