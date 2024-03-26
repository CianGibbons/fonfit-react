import { AccountSettingsPage } from '@/pages/account-settings.page';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/account-settings')({
  component: AccountSettingsPage
});
