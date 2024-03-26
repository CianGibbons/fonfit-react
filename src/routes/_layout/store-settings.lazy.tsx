import { StoreSettingsPage } from '@/pages/store-settings.page';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/store-settings')({
  component: StoreSettingsPage
});
