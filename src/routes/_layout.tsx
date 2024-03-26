import { DashboardLayout } from '@/pages/dashboard.layout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
  component: DashboardLayout
});
