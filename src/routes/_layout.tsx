import Header from '@/ui/navigation/header';
import Sidebar from '@/ui/navigation/sidebar';

import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent
});

function LayoutComponent() {
  return (
    <div className="grid h-screen grid-cols-[26rem,1fr] grid-rows-[auto,1fr]">
      <Header />
      <Sidebar />
      <main className=" pt-16 py-16 pb-24">
        <Outlet />
      </main>
    </div>
  );
}
