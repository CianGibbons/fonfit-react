import { Input } from '@/components/ui/input';
import { updateProduct } from '@/data/api/products.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Column, Getter, Row, Table } from '@tanstack/table-core';
import { useEffect, useRef, useState } from 'react';
import { Product } from '../products/product.schema';
import { TableKeys } from '@/utils/constants';
import { toast } from 'sonner';

export interface DataTableEditableTextCellProps<TData, TValue> {
  getValue: Getter<string>;
  row: Row<TData & { id: string }>;
  column: Column<TData, TValue>;
  table: Table<TData>;
  updateSuccessMessage?: string;
  validation: {
    maxCharacters: number;
    maxCharacterMessage: string;
    required: boolean;
    requiredMessage: string;
  };
}

export function DataTableEditableTextCell<TData, TValue>({
  getValue,
  row,
  column,
  table,
  updateSuccessMessage,
  validation
}: DataTableEditableTextCellProps<TData, TValue>) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const currentValueRef = useRef(initialValue);
  const ref = useRef<HTMLInputElement>(null);

  let cancelKeyPressed = false;

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ id, value }: { id: string; value: Partial<Product> }) => updateProduct(id, value),
    onSuccess: () => {
      table.options.meta?.updateData(row.index, column.id, value);
      queryClient.invalidateQueries({
        queryKey: [TableKeys.Products]
      });

      currentValueRef.current = value;
      toast.success(updateSuccessMessage);
    },
    onError: (error) => {
      // Reset the value to currentValueRef.current
      setValue(currentValueRef.current);
      toast.error(error.message);
    }
  });

  useEffect(() => {
    setValue(initialValue);
    currentValueRef.current = initialValue;
  }, [initialValue]);

  const onBlur = async () => {
    if (cancelKeyPressed) {
      cancelKeyPressed = false;
      return;
    }
    // if the value length is greater than 255 toast an error message and re focus the textarea
    if (value.length > validation.maxCharacters) {
      toast.error(validation.maxCharacterMessage);
      ref.current?.focus();

      return;
    }
    if (validation.required && value.length === 0) {
      toast.error(validation.requiredMessage);
      ref.current?.focus();

      return;
    }

    if (value === currentValueRef.current) {
      return;
    }

    await mutate({ id: row.original.id, value: { [column.id]: value } });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      ref.current?.blur();
    } else if (event.key === 'Escape') {
      cancelKeyPressed = true;
      setValue(currentValueRef.current);
      ref.current?.blur();
    }
  };

  return (
    <Input
      ref={ref}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      className="border-0 shadow-none"
    />
  );
}
