import { AccessorColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { DataTableColumnHeader } from '@/ui/data-table/data-table-header.component';
import { ProductTableEditableTextCell } from '../cells/product-table-editable-text-cell.component';
import { capitalizeFirstLetterEachWord } from '@/lib/utils';

export const ProductNameColumn: AccessorColumnDef<Product, string> = {
  accessorKey: 'name',
  sortingFn: 'alphanumeric',
  header: ({ column }) => {
    return <DataTableColumnHeader column={column} title="Name" />;
  },
  cell: ({ getValue, row, column, table }) => {
    const maxCharacters = 255;
    const updateSuccessMessage = 'Updated Product successfully!';
    const validation = {
      maxCharacters: maxCharacters,
      maxCharacterMessage: `${capitalizeFirstLetterEachWord(column.id.replace(/_/g, ' '))} cannot be more than ${maxCharacters} characters.`,
      required: true,
      requiredMessage: `${capitalizeFirstLetterEachWord(column.id.replace(/_/g, ' '))} is required.`
    };

    return (
      <ProductTableEditableTextCell
        getValue={getValue}
        row={row}
        column={column}
        table={table}
        updateSuccessMessage={updateSuccessMessage}
        validation={validation}
      />
    );
  }
};
