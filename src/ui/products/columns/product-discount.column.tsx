import { AccessorColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { DataTableColumnHeader } from '@/ui/data-table/data-table-header.component';
import { ProductTableEditableNumberCell } from '../cells/product-table-editable-number-cell.component';

export const ProductDiscountColumn: AccessorColumnDef<Product, number> = {
  accessorKey: 'discount',
  sortingFn: 'alphanumeric',
  header: ({ column }) => {
    return <DataTableColumnHeader column={column} title="Discount" />;
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
          requiredMessage: 'Discount is required.',
          isInteger: true,
          isIntegerMessage: 'Discount must be a whole number.',
          enforcePositive: false,
          enforcePositiveMessage: 'Discount must be a positive number.'
        }}
        isPercentage={true}
      />
    );
  }
};
