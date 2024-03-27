import { DashboardLayout } from '@/layouts/dashboard.layout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
  component: DashboardLayout
});
