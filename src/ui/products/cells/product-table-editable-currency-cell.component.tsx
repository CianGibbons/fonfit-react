import {
  DataTableEditableCurrencyCell,
  DataTableEditableCurrencyCellProps
} from '@/ui/data-table/data-table-editable-currency.cell.component';

export const ProductTableEditableCurrencyCell = <TData, TValue>({
  getValue,
  row,
  column,
  table,
  validation,
  updateSuccessMessage
}: DataTableEditableCurrencyCellProps<TData, TValue>) => {
  return (
    <DataTableEditableCurrencyCell
      getValue={getValue}
      row={row}
      column={column}
      table={table}
      updateSuccessMessage={updateSuccessMessage}
      validation={validation}
    />
  );
};
