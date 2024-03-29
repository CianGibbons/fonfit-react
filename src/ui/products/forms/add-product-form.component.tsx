'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '@/data/api/products.api';
import { toast } from 'sonner';
import { TableKeys } from '@/utils/constants';
import { Spinner } from '@/ui/spinner.component';
import { Checkbox } from '@/components/ui/checkbox';
import { DescriptionTooltip } from '@/ui/info-tooltip.component';

const formSchema = z.object({
  name: z.string().min(1),
  in_stock: z
    .union([z.number(), z.string().transform(parseFloat)])
    .default(0)
    .refine((x) => Number.isInteger(x), 'In Stock must be a whole number.')
    .optional(),
  // If a decimal is provided, inputs with type number return it as a string.
  // As a result, we need to transform the string to a floating point number.
  // Then we need to check if the number has at most 2 decimal places.
  price: z
    .union([z.number(), z.string().transform(parseFloat)])
    .default(0)
    .refine((x) => x * 100 - Math.trunc(x * 100) < Number.EPSILON, 'Price must have at most 2 decimal places.')
    .optional(),
  discount: z
    .union([z.number(), z.string().transform(parseFloat)])
    .default(0)
    .refine((x) => Number.isInteger(x), 'In Stock must be a whole number.')
    .optional(),
  is_purchasable: z.boolean().default(true).optional(),
  image: z.instanceof(FileList).optional()
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
      name: '',
      in_stock: 0,
      price: 0.0,
      discount: 0,
      is_purchasable: true
    }
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutate({ ...values, image: values.image?.[0] });
  }

  function close() {
    form.reset();
    setIsOpen(false);
  }

  const fileRef = form.register('image');

  return (
    <div className="sm:max-w-[425px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 overflow-auto md:overflow-visible max-h-[90vh] sm:max-h-[70vh]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className=" flex items-center justify-between">
                    Product Name
                    <DescriptionTooltip tooltipText="This is the name of the product to be added." />
                  </div>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter Product Name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="in_stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center justify-between">
                    Number in stock
                    <DescriptionTooltip tooltipText="This is the quantity of this product you have in stock. This will default to 0." />
                  </div>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter the quantity that is in stock." type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center justify-between">
                    Cost of the Product
                    <DescriptionTooltip tooltipText="This is the price of the product for customers to buy it. This will default to €0.00." />
                  </div>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter the price of the product." type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center justify-between">
                    Discount on the Product
                    <DescriptionTooltip tooltipText="This is the discount on the price of the product for customers to buy it. This will default to 0%." />
                  </div>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter the price of the product." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="is_purchasable"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center justify-between">
                    Listed for Sale
                    <DescriptionTooltip tooltipText="This is a flag to indicate if the product is listed for sale. This will default to true." />
                  </div>
                </FormLabel>
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center justify-between">
                    Image
                    <DescriptionTooltip
                      tooltipText="This is the image of the product to be added. This will default to an generic image coming soon
                  placeholder."
                    />
                  </div>
                </FormLabel>
                <FormControl>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Input
                      type="file"
                      {...fileRef}
                      className="file:hover:bg-primary/90 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-primary file:text-primary-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-x-2">
            <Button type="submit" disabled={isPending}>
              {isPending ? <Spinner /> : 'Submit'}
            </Button>
            <Button variant="outline" disabled={isPending} type="reset" onClick={close}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
