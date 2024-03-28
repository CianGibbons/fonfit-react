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

type ProductActionsProps = {
  productId: string;
};

export function ProductActions({ productId }: ProductActionsProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TableKeys.Products]
      });

      toast.success('Product deleted successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  if (isPending) {
    return <Spinner size={24} />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <Icons.MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(productId)}>Copy Product ID</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View Product</DropdownMenuItem>
        <DropdownMenuItem onClick={() => mutate(productId)}>Delete Product</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
