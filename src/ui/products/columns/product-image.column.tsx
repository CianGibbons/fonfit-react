import { AccessorColumnDef } from '@tanstack/react-table';
import { Product } from '../product.schema';
import { DataTableColumnHeader } from '@/ui/data-table/data-table-header.component';

export const ProductImageColumn: AccessorColumnDef<Product, string> = {
  accessorKey: 'image',
  enableSorting: false,
  header: ({ column }) => {
    return <DataTableColumnHeader column={column} title="Image" />;
  },
  cell: (props) => (
    <div className="flex size-16 justify-center">
      <img className="h-full" src={props.getValue()} alt={props.row.original.name} />
    </div>
  )
};
