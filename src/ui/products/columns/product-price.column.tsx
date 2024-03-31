import { AccessorColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { DataTableColumnHeader } from '@/ui/data-table/data-table-header.component';
import { ProductTableEditableCurrencyCell } from '../cells/product-table-editable-currency-cell.component';

export const ProductPriceColumn: AccessorColumnDef<Product, number> = {
  accessorKey: 'price',
  sortingFn: 'alphanumeric',
  header: ({ column }) => {
    return <DataTableColumnHeader column={column} title="Price" />;
  },
  cell: ({ row, table, column, getValue }) => {
    const validation = {
      required: true,
      requiredMessage: 'Price is required.',
      enforcePositive: true,
      enforcePositiveMessage: 'Price must be positive.'
    };

    const updateSuccessMessage = 'Price updated successfully.';

    return (
      <ProductTableEditableCurrencyCell
        row={row}
        table={table}
        column={column}
        getValue={getValue}
        validation={validation}
        updateSuccessMessage={updateSuccessMessage}
      />
    );
  }
};
