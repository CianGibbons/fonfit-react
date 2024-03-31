import { Input } from '@/components/ui/input';
import { updateProduct } from '@/data/api/products.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Column, Getter, Row, Table } from '@tanstack/table-core';
import { useEffect, useRef, useState } from 'react';
import { Product } from '../products/product.schema';
import { TableKeys } from '@/utils/constants';
import { toast } from 'sonner';
import { isNullOrUndefined } from '@/lib/type-helpers/helpers/common';

export interface DataTableEditableCurrencyCellProps<TData, TValue> {
  getValue: Getter<number>;
  row: Row<TData & { id: string }>;
  column: Column<TData, TValue>;
  table: Table<TData>;
  updateSuccessMessage?: string;
  validation: {
    required: boolean;
    requiredMessage: string;
    enforcePositive?: boolean;
    enforcePositiveMessage?: string;
  };
}

export function DataTableEditableCurrencyCell<TData, TValue>({
  getValue,
  row,
  column,
  table,
  updateSuccessMessage,
  validation
}: DataTableEditableCurrencyCellProps<TData, TValue>) {
  const initialValue = getValue();
  const [value, setValue] = useState<number | ''>(initialValue);
  const currentValueRef = useRef<number | ''>(initialValue);
  const ref = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const [isFocused, setIsFocused] = useState(false);
  let cancelKeyPressed = false;

  const { mutate } = useMutation({
    mutationFn: ({ id, value }: { id: string; value: Partial<Product> }) => updateProduct(id, value),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TableKeys.Products]
      });
      table.options.meta?.updateData(row.index, column.id, value);

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

  useEffect(() => {
    if (isFocused) {
      ref.current?.focus();
    }
  }, [isFocused]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === '') {
      setValue('');
      return;
    }

    setValue(Number(e.target.value));
  };

  const onBlur = async () => {
    const newValue = value; // Capture the current state

    if (cancelKeyPressed) {
      cancelKeyPressed = false;
      return;
    }

    if (validation.required && (newValue === '' || isNullOrUndefined(newValue))) {
      toast.error(validation.requiredMessage);
      ref.current?.focus();
      return;
    }

    if (validation.enforcePositive && Number(newValue) < 0) {
      toast.error(validation.enforcePositiveMessage);
      ref.current?.focus();
      return;
    }

    setIsFocused(false);

    // Use the locally captured state for comparison
    if (newValue === currentValueRef.current) {
      return;
    }

    await mutate({ id: row.original.id, value: { [column.id]: newValue } });
  };

  // Add a new onFocus handler to set isFocused to true
  const onFocus = () => {
    setIsFocused(true);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      ref.current?.blur();
    } else if (event.key === 'Escape') {
      // Reset the value synchronously before blurring
      const resetValue = currentValueRef.current;
      setValue(resetValue); // Attempt to reset the state, though this may not sync before blur
      setIsFocused(false); // Ensure focus state is also reset

      cancelKeyPressed = true;

      event.preventDefault(); // Prevent any default behavior
    }
  };

  return isFocused ? (
    <Input
      ref={ref}
      type="number"
      value={value.toString()}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      className="border-0 shadow-none "
    />
  ) : (
    <div className="text-right font-medium" onClick={onFocus} tabIndex={0} onFocus={onFocus}>
      {new Intl.NumberFormat('en-DE', {
        style: 'currency',
        currency: 'EUR'
      }).format(parseFloat(row.getValue('price')))}
    </div>
  );
}
