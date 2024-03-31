import {
  DataTableEditableTextCell,
  DataTableEditableTextCellProps
} from '@/ui/data-table/data-table-editable-text-cell.component';

export const ProductTableEditableTextCell = <TData, TValue>({
  getValue,
  row,
  column,
  table,
  validation,
  updateSuccessMessage
}: DataTableEditableTextCellProps<TData, TValue>) => {
  return (
    <DataTableEditableTextCell
      getValue={getValue}
      row={row}
      column={column}
      table={table}
      updateSuccessMessage={updateSuccessMessage}
      validation={validation}
    />
  );
};
