import { AccessorColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { DataTableColumnHeader } from '@/ui/data-table/data-table-header.component';

export const ProductPriceColumn: AccessorColumnDef<Product, number> = {
  accessorKey: 'price',
  sortingFn: 'alphanumeric',
  header: ({ column }) => {
    return <DataTableColumnHeader column={column} title="Price" />;
  },
  cell: ({ row }) => {
    const amount = parseFloat(row.getValue('price'));
    const formatted = new Intl.NumberFormat('en-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);

    return <div className="text-right font-medium">{formatted}</div>;
  }
};
