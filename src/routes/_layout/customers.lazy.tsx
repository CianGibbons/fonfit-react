import { CustomersPage } from '@/pages/customers.page';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/customers')({
  component: CustomersPage
});
