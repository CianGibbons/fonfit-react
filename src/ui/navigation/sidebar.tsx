import { Link } from '@tanstack/react-router';
import { Icons } from '../icons';
import { ThemeModeToggle } from '../theme-mode-toggle';

const LinkChildren = (
  state: {
    isActive: boolean;
  },
  label: string,
  activeIcon: React.ReactNode,
  inactiveIcon: React.ReactNode
) => {
  return (
    <>
      {state.isActive ? activeIcon : inactiveIcon}
      <span>{label}</span>
    </>
  );
};

const MainNavigation = () => {
  return (
    <nav className="flex flex-col gap-3">
      <ul>
        <li>
          <Link
            to="/"
            className="[&.active]:text-destructive hover:text-destructive [&.active]:font-bold flex items-center gap-5 text-2xl font-medium py-5 px-10 transition-all"
            children={(state) =>
              LinkChildren(
                state,
                'Dashboard',
                <Icons.Home className="h-6 w-auto" />,
                <Icons.HomeOutline className="h-6 w-auto" />
              )
            }
          />
        </li>
        <li>
          <Link
            to="/account"
            className="[&.active]:text-destructive hover:text-destructive [&.active]:font-bold flex items-center gap-5 text-2xl font-medium py-5 px-10 transition-all"
            children={(state) =>
              LinkChildren(
                state,
                'Account',
                <Icons.Home className="h-6 w-auto" />,
                <Icons.HomeOutline className="h-6 w-auto" />
              )
            }
          />
        </li>
        <li>
          <Link
            to="/clients"
            className="[&.active]:text-destructive hover:text-destructive [&.active]:font-bold flex items-center gap-5 text-2xl font-medium py-5 px-10 transition-all"
            children={(state) =>
              LinkChildren(
                state,
                'Clients',
                <Icons.Home className="h-6 w-auto" />,
                <Icons.HomeOutline className="h-6 w-auto" />
              )
            }
          />
        </li>
        <li>
          <Link
            to="/orders"
            className="[&.active]:text-destructive hover:text-destructive [&.active]:font-bold flex items-center gap-5 text-2xl font-medium py-5 px-10 transition-all"
            children={(state) =>
              LinkChildren(
                state,
                'Orders',
                <Icons.Home className="h-6 w-auto" />,
                <Icons.HomeOutline className="h-6 w-auto" />
              )
            }
          />
        </li>
        <li>
          <Link
            to="/products"
            className="[&.active]:text-destructive hover:text-destructive [&.active]:font-bold flex items-center gap-5 text-2xl font-medium py-5 px-10 transition-all"
            children={(state) =>
              LinkChildren(
                state,
                'Products',
                <Icons.Home className="h-6 w-auto" />,
                <Icons.HomeOutline className="h-6 w-auto" />
              )
            }
          />
        </li>
        <li>
          <Link
            to="/settings"
            className="[&.active]:text-destructive hover:text-destructive [&.active]:font-bold flex items-center gap-5 text-2xl font-medium py-5 px-10 transition-all"
            children={(state) =>
              LinkChildren(
                state,
                'Settings',
                <Icons.Home className="h-6 w-auto" />,
                <Icons.HomeOutline className="h-6 w-auto" />
              )
            }
          />
        </li>
        <li>
          <Link
            to="/users"
            className="[&.active]:text-destructive hover:text-destructive [&.active]:font-bold flex items-center gap-5 text-2xl font-medium py-5 px-10 transition-all"
            children={(state) =>
              LinkChildren(
                state,
                'Users',
                <Icons.Home className="h-6 w-auto" />,
                <Icons.HomeOutline className="h-6 w-auto" />
              )
            }
          />
        </li>
      </ul>

      <ThemeModeToggle />
    </nav>
  );
};

const Sidebar = () => {
  return (
    <aside className="bg-primary-foreground py-12 px-8 border-r border-muted-foreground row-span-full flex flex-col items-start">
      <div className="self-center">
        <Icons.Logo className="text-destructive h-36 w-auto" />
      </div>
      <MainNavigation />
    </aside>
  );
};

export default Sidebar;
