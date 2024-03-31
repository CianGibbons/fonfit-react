import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Icons } from '../icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProduct } from '@/data/api/products.api';
import { TableKeys } from '@/utils/constants';
import { Spinner } from '../spinner.component';
import { toast } from 'sonner';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Table } from '@tanstack/react-table';

type ProductActionsProps<TData> = {
  productId: string;
  table: Table<TData>;
};

export function ProductActions<TData>({ productId, table }: ProductActionsProps<TData>) {
  const queryClient = useQueryClient();

  const { mutate: deleteMutation, isPending: deletePending } = useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TableKeys.Products]
      });

      table.options.meta?.refreshData();

      toast.success('Product deleted successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  if (deletePending) {
    return <Spinner size={24} />;
  }

  return (
    <>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Icons.MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(productId)}>
              Copy Product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DialogTrigger asChild>
              <DropdownMenuItem>Delete Product</DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuItem>Update Image</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to permanently delete this product?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="destructive" onClick={() => deleteMutation(productId)}>
              Confirm
            </Button>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
