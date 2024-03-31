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

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Products</h1>
      </div>
      <div className="flex flex-1 items-start justify-center rounded-lg border border-dashed shadow-sm">
        <ProductsTable products={products as Product[]} />
      </div>
    </>
  );
}
