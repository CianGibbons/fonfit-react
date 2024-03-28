import { AccessorColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { DataTableColumnHeader } from '@/ui/data-table/data-table-header.component';

export const ProductDiscountColumn: AccessorColumnDef<Product, number> = {
  accessorKey: 'discount',
  header: ({ column }) => {
    return <DataTableColumnHeader column={column} title="Discount" />;
  }
};
