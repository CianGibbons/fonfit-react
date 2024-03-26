import { AnalyticsPage } from '@/pages/analytics.page';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/analytics')({
  component: AnalyticsPage
});
