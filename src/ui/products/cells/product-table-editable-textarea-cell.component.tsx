import {
  DataTableEditableTextAreaCell,
  DataTableEditableTextAreaCellProps
} from '@/ui/data-table/data-table-editable-textarea-cell.component';

export const ProductTableEditableTextAreaCell = <TData, TValue>({
  getValue,
  row,
  column,
  table,
  updateSuccessMessage,
  placeholder,
  validation
}: DataTableEditableTextAreaCellProps<TData, TValue>) => {
  return (
    <DataTableEditableTextAreaCell
      getValue={getValue}
      row={row}
      column={column}
      table={table}
      updateSuccessMessage={updateSuccessMessage}
      validation={validation}
      placeholder={placeholder}
    />
  );
};
