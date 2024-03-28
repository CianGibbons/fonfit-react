import { ColumnDef } from '@tanstack/react-table';
import { ProductColumn } from '.';
import { Product } from '../product.schema';
import { Checkbox } from '@/components/ui/checkbox';

export const ProductColumns: Array<ColumnDef<Product, any>> = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  ProductColumn.Image,
  ProductColumn.Name,
  ProductColumn.InStock,
  ProductColumn.Price,
  ProductColumn.Discount,
  ProductColumn.Description,
  ProductColumn.Category,
  ProductColumn.Actions
];
