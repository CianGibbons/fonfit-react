'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '@/data/api/products.api';
import { toast } from 'sonner';
import { TableKeys } from '@/utils/constants';
import { Spinner } from '@/ui/spinner.component';

const formSchema = z.object({
  name: z.string().min(1)
});

interface AddProductFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

export function AddProductForm({ setIsOpen }: AddProductFormProps) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TableKeys.Products]
      });
      toast.success('New Product created successfully!');
      close();
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ''
    }
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutate(values);
  }

  function close() {
    form.reset();
    setIsOpen(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Product Name" {...field} />
              </FormControl>
              <FormDescription>This is the name of the product to be added.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? <Spinner /> : 'Submit'}
        </Button>
        <Button variant="outline" disabled={isPending} type="reset" onClick={close}>
          Close
        </Button>
      </form>
    </Form>
  );
}
