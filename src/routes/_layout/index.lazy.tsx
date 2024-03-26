import { HomePage } from '@/pages/home.page';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/')({
  component: HomePage
});
