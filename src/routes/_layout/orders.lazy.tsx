import { OrdersPage } from '@/pages/orders.page';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/orders')({
  component: OrdersPage
});
