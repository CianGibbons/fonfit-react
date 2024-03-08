import RouteNotFound from '@/pages/route-not-found.page';
import { ThemeModeToggle } from '@/ui/theme-mode-toggle';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Dashboard
        </Link>{' '}
        <Link to="/account" className="[&.active]:font-bold">
          Account
        </Link>
        <Link to="/clients" className="[&.active]:font-bold">
          Clients
        </Link>
        <Link to="/login" className="[&.active]:font-bold">
          Login
        </Link>
        <Link to="/orders" className="[&.active]:font-bold">
          Orders
        </Link>
        <Link to="/products" className="[&.active]:font-bold">
          Products
        </Link>
        <Link to="/settings" className="[&.active]:font-bold">
          Settings
        </Link>
        <Link to="/users" className="[&.active]:font-bold">
          Users
        </Link>
        <ThemeModeToggle />
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <RouteNotFound />
});
