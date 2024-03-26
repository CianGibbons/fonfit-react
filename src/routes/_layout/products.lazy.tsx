import { ProductsPage } from '@/pages/products.page';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/products')({
  component: ProductsPage
});
