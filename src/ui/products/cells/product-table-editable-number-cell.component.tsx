import {
  DataTableEditableNumberCell,
  DataTableEditableNumberCellProps
} from '@/ui/data-table/data-table-editable-number.cell.component';

export const ProductTableEditableNumberCell = <TData, TValue>({
  getValue,
  row,
  column,
  table,
  validation,
  updateSuccessMessage
}: DataTableEditableNumberCellProps<TData, TValue>) => {
  return (
    <DataTableEditableNumberCell
      getValue={getValue}
      row={row}
      column={column}
      table={table}
      updateSuccessMessage={updateSuccessMessage}
      validation={validation}
    />
  );
};
