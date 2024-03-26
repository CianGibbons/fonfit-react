import { AdministratorsPage } from '@/pages/administrators.page';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/administrators')({
  component: AdministratorsPage
});
