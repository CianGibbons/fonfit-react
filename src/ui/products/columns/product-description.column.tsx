import { AccessorColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { DataTableColumnHeader } from '@/ui/data-table/data-table-header.component';
import { ProductTableEditableTextAreaCell } from '../cells/product-table-editable-textarea-cell.component';
import { capitalizeFirstLetterEachWord } from '@/lib/utils';

export const ProductDescriptionColumn: AccessorColumnDef<Product, string> = {
  accessorKey: 'description',
  sortingFn: 'alphanumeric',
  header: ({ column }) => {
    return <DataTableColumnHeader column={column} title="Description" />;
  },
  cell: ({ getValue, row, column, table }) => {
    const maxCharacters = 255;
    const updateSuccessMessage = 'Updated Product successfully!';
    const placeholder = `Enter ${capitalizeFirstLetterEachWord(column.id.replace(/_/g, ' '))} here...`;

    const validation = {
      maxCharacters: maxCharacters,
      maxCharacterMessage: `${capitalizeFirstLetterEachWord(column.id.replace(/_/g, ' '))} cannot be more than ${maxCharacters} characters.`
    };
    return (
      <ProductTableEditableTextAreaCell
        getValue={getValue}
        row={row}
        column={column}
        table={table}
        updateSuccessMessage={updateSuccessMessage}
        validation={validation}
        placeholder={placeholder}
      />
    );
  }
};
