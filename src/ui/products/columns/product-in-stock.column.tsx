import { AccessorColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { DataTableColumnHeader } from '@/ui/data-table/data-table-header.component';
import { ProductTableEditableNumberCell } from '../cells/product-table-editable-number-cell.component';

export const ProductInStockColumn: AccessorColumnDef<Product, number> = {
  accessorKey: 'in_stock',
  sortingFn: 'alphanumeric',
  header: ({ column }) => {
    return <DataTableColumnHeader column={column} title="In Stock" />;
  },
  cell: ({ getValue, row, column, table }) => {
    return (
      <ProductTableEditableNumberCell
        getValue={getValue}
        row={row}
        column={column}
        table={table}
        updateSuccessMessage="Updated Product successfully!"
        validation={{
          required: true,
          requiredMessage: 'In Stock is required.',
          isInteger: true,
          isIntegerMessage: 'In Stock must be a whole number.',
          enforcePositive: true,
          enforcePositiveMessage: 'In Stock must be a positive number.'
        }}
      />
    );
  }
};
