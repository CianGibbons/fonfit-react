import { Button } from '@/components/ui/button';
import { getAllProducts } from '@/data/api/products.api';
import { Product } from '@/ui/products/product.schema';
import { ProductsTable } from '@/ui/products/products-table.component';
import { Spinner } from '@/ui/spinner.component';
import { TableKeys } from '@/utils/constants';
import { useQuery } from '@tanstack/react-query';

export function ProductsPage() {
  const {
    isLoading,
    data: products
    // error
  } = useQuery({
    queryKey: [TableKeys.Products],
    queryFn: getAllProducts
  });

  if (isLoading) {
    return (
      <>
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Products</h1>
        </div>
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <Spinner size={32} />
        </div>
      </>
    );
  }

  if (!products || products?.length === 0) {
    return (
      <>
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Products</h1>
        </div>
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">You have no products</h3>
            <p className="text-sm text-muted-foreground">You can start selling as soon as you add a product.</p>
            <Button className="mt-4">Add Product</Button>
          </div>
        </div>
      </>
    );
  }

  return <ProductsTable products={products as Product[]} />;
}
