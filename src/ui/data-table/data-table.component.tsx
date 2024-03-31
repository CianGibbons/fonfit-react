import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  VisibilityState,
  getFilteredRowModel,
  RowData,
  Table as TanStackTable
} from '@tanstack/react-table';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { DataTablePagination } from './data-table-pagination.component';
import { DataTableViewOptions } from './data-table-view-options.component';
import { useQueryClient } from '@tanstack/react-query';
import { TableKeys } from '@/utils/constants';

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    refreshData: () => void;
  }
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  initialData: TData[];
  addItemForm?: (table: TanStackTable<TData>) => JSX.Element;
}

export function DataTable<TData, TValue>({
  columns,
  initialData,
  addItemForm: addItemDialog
}: DataTableProps<TData, TValue>) {
  // TODO: Resizable Columns
  // TODO: Editable Images + Categories

  const [data, setData] = useState<TData[]>(initialData);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const queryClient = useQueryClient();

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    enableSortingRemoval: true,
    enableMultiSort: true,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    },
    meta: {
      updateData: (rowIndex: number, columnId: string, value: unknown) => {
        return setData((prevData) => {
          return prevData.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...prevData[rowIndex],
                [columnId]: value
              };
            }
            return row;
          });
        });
      },

      refreshData: async () => {
        await queryClient.refetchQueries({ queryKey: [TableKeys.Products] });
        const data = queryClient.getQueryData([TableKeys.Products]);
        setData(data as TData[]);
      }
    }
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Search Product by Name..."
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('name')?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        {addItemDialog && addItemDialog(table)}
        <DataTableViewOptions table={table} />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
