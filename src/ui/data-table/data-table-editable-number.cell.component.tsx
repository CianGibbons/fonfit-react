import { Input } from '@/components/ui/input';
import { updateProduct } from '@/data/api/products.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Column, Getter, Row, Table } from '@tanstack/table-core';
import { useEffect, useRef, useState } from 'react';
import { Product } from '../products/product.schema';
import { TableKeys } from '@/utils/constants';
import { toast } from 'sonner';
import { isNullOrUndefined } from '@/lib/type-helpers/helpers/common';

export interface DataTableEditableNumberCellProps<TData, TValue> {
  getValue: Getter<number>;
  row: Row<TData & { id: string }>;
  column: Column<TData, TValue>;
  table: Table<TData>;
  updateSuccessMessage?: string;
  validation: {
    required: boolean;
    requiredMessage: string;
    isInteger?: boolean; // This input is either an integer or a float
    isIntegerMessage?: string;
    enforcePositive?: boolean;
    enforcePositiveMessage?: string;
  };
  isPercentage?: boolean;
}

export function DataTableEditableNumberCell<TData, TValue>({
  getValue,
  row,
  column,
  table,
  updateSuccessMessage,
  validation,
  isPercentage = false
}: DataTableEditableNumberCellProps<TData, TValue>) {
  const initialValue = getValue();
  const [value, setValue] = useState<number | ''>(initialValue);
  const currentValueRef = useRef<number | ''>(initialValue);
  const ref = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

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

  const onBlur = async () => {
    if (validation.required && (isNullOrUndefined(value) || value === '')) {
      toast.error(validation.requiredMessage);
      ref.current?.focus();

      return;
    }

    // If isInteger is true, then the value must be an integer
    if (validation.isInteger && !Number.isInteger(value)) {
      toast.error('The value must be an integer');
      ref.current?.focus();

      return;
    }

    // If enforcePositive is true, then the value must be positive
    if (validation.enforcePositive && Number(value) < 0) {
      toast.error('The value must be a positive number');
      ref.current?.focus();

      return;
    }

    // If the value is percentage and isPercentage is true, then the value must be between 0 and 100
    if (isPercentage && (Number(value) < 0 || Number(value) > 100)) {
      toast.error('The value must be between 0 and 100');
      ref.current?.focus();

      return;
    }

    if (value === currentValueRef.current) {
      return;
    }

    await mutate({ id: row.original.id, value: { [column.id]: value } });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // If the value is empty
    if (value === '') {
      setValue('');
      return;
    }

    setValue(parseFloat(value));
  };

  return (
    <div style={{ position: 'relative' }}>
      {isPercentage && (
        <div style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)' }}>%</div>
      )}
      <Input
        ref={ref}
        type="number"
        value={value.toString()}
        onChange={onChange}
        onBlur={onBlur}
        className={isPercentage ? `border-0 shadow-none pl-5` : ''} // Add left padding to prevent the number from overlapping with the %
      />
    </div>
  );
}
