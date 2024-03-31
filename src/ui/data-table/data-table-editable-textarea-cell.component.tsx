import { updateProduct } from '@/data/api/products.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Column, Getter, Row, Table } from '@tanstack/table-core';
import { useEffect, useRef, useState } from 'react';
import { Product } from '../products/product.schema';
import { TableKeys } from '@/utils/constants';
import { toast } from 'sonner';
import { Textarea } from '@/components/ui/textarea';

// TODO: Strings hardcoded, should be replaced with constants taken from the the component using the generic data table.

export interface DataTableEditableTextAreaCellProps<TData, TValue> {
  getValue: Getter<string>;
  row: Row<TData & { id: string }>;
  column: Column<TData, TValue>;
  table: Table<TData>;
  updateSuccessMessage: string;
  placeholder: string;
  validation: {
    maxCharacters: number;
    maxCharacterMessage: string;
  };
}

export function DataTableEditableTextAreaCell<TData, TValue>({
  getValue,
  row,
  column,
  table,
  updateSuccessMessage,
  validation,
  placeholder
}: DataTableEditableTextAreaCellProps<TData, TValue>) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const currentValueRef = useRef(initialValue);
  const [descriptionCharCount, setDescriptionCharCount] = useState(initialValue.length);
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);

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
    // if the value length is greater than 255 toast an error message and re focus the textarea
    if (value.length > validation.maxCharacters) {
      toast.error(validation.maxCharacterMessage);
      setIsFocused(true);
      ref.current?.focus();

      return;
    }

    setIsFocused(false);

    if (value === currentValueRef.current) {
      return;
    }

    await mutate({ id: row.original.id, value: { [column.id]: value } });
  };

  return (
    <div>
      <Textarea
        ref={ref}
        value={value}
        onChange={(event) => {
          setDescriptionCharCount(event.target.value.length);
          setValue(event.target.value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={onBlur}
        className="border-0 shadow-none"
        placeholder={placeholder}
      />
      <div
        className={`float-right text-[0.7rem] ${descriptionCharCount > validation.maxCharacters && 'text-destructive'}  ${isFocused ? 'visible' : 'invisible'}`}
      >
        <span>
          {descriptionCharCount}/{validation.maxCharacters}
        </span>
      </div>
    </div>
  );
}
