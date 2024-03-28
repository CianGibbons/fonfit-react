import { Column } from '@tanstack/react-table';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Icons } from '../icons';

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 h-8 data-[state=open]:bg-accent"
        onClick={column.getToggleSortingHandler()}
        title={
          column.getCanSort()
            ? column.getNextSortingOrder() === 'asc'
              ? 'Sort ascending'
              : column.getNextSortingOrder() === 'desc'
                ? 'Sort descending'
                : 'Clear sort'
            : undefined
        }
      >
        <span>{title}</span>
        {column.getIsSorted() === 'desc' ? (
          <Icons.ArrowDownIcon className="ml-2 h-4 w-4" />
        ) : column.getIsSorted() === 'asc' ? (
          <Icons.ArrowUpIcon className="ml-2 h-4 w-4" />
        ) : (
          <Icons.CaretSortIcon className="ml-2 h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
