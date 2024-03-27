import { Link, Outlet } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Icons } from '@/ui/icons';
import { ThemeModeToggle } from '@/ui/theme-mode-toggle';
import { CompanyName } from '@/utils/constants';

export function DashboardLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Icons.Logo className="h-6 w-6" />
              <span className="">{CompanyName}</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Icons.Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="/"
                activeProps={{
                  className: 'text-primary bg-muted'
                }}
                activeOptions={{ exact: true }}
                inactiveProps={{ className: 'text-muted-foreground' }}
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
              >
                <Icons.Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                to="/orders"
                activeProps={{
                  className: 'text-primary bg-muted'
                }}
                activeOptions={{ exact: true }}
                inactiveProps={{ className: 'text-muted-foreground' }}
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
              >
                <Icons.Cart className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
              </Link>
              <Link
                to="/products"
                activeProps={{
                  className: 'text-primary bg-muted'
                }}
                activeOptions={{ exact: true }}
                inactiveProps={{ className: 'text-muted-foreground' }}
                className="flex items-center gap-3 rounded-lg  px-3 py-2 transition-all hover:text-primary"
              >
                <Icons.Package className="h-4 w-4" />
                Products{' '}
              </Link>
              <Link
                to="/customers"
                activeProps={{
                  className: 'text-primary bg-muted'
                }}
                activeOptions={{ exact: true }}
                inactiveProps={{ className: 'text-muted-foreground' }}
                className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary"
              >
                <Icons.UsersGroup className="h-4 w-4" />
                Customers
              </Link>
              <Link
                to="/analytics"
                activeProps={{
                  className: 'text-primary bg-muted'
                }}
                activeOptions={{ exact: true }}
                inactiveProps={{ className: 'text-muted-foreground' }}
                className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary"
              >
                <Icons.LineChart className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                to="/administrators"
                activeProps={{
                  className: 'text-primary bg-muted'
                }}
                activeOptions={{ exact: true }}
                inactiveProps={{ className: 'text-muted-foreground' }}
                className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary"
              >
                <Icons.UserHeadset className="h-4 w-4" />
                Administrators
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Icons.Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
                  <Icons.Logo className="h-6 w-6" />
                  <span className="sr-only">{CompanyName}</span>
                </Link>
                <Link
                  to="/"
                  activeProps={{
                    className: 'text-primary bg-muted'
                  }}
                  activeOptions={{ exact: true }}
                  inactiveProps={{ className: 'text-muted-foreground' }}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                >
                  <Icons.Home className="h-5 w-5" />
                  Home
                </Link>
                <Link
                  to="/orders"
                  activeProps={{
                    className: 'text-primary bg-muted'
                  }}
                  activeOptions={{ exact: true }}
                  inactiveProps={{ className: 'text-muted-foreground' }}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl  px-3 py-2  hover:text-foreground"
                >
                  <Icons.Cart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
                </Link>
                <Link
                  to="/products"
                  activeProps={{
                    className: 'text-primary bg-muted'
                  }}
                  activeOptions={{ exact: true }}
                  inactiveProps={{ className: 'text-muted-foreground' }}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground"
                >
                  <Icons.Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  to="/customers"
                  activeProps={{
                    className: 'text-primary bg-muted'
                  }}
                  activeOptions={{ exact: true }}
                  inactiveProps={{ className: 'text-muted-foreground' }}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                >
                  <Icons.UsersGroup className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  to="/analytics"
                  activeProps={{
                    className: 'text-primary bg-muted'
                  }}
                  activeOptions={{ exact: true }}
                  inactiveProps={{ className: 'text-muted-foreground' }}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                >
                  <Icons.LineChart className="h-5 w-5" />
                  Analytics
                </Link>
                <Link
                  to="/administrators"
                  activeProps={{
                    className: 'text-primary bg-muted'
                  }}
                  activeOptions={{ exact: true }}
                  inactiveProps={{ className: 'text-muted-foreground' }}
                  className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary"
                >
                  <Icons.UserHeadset className="h-4 w-4" />
                  Administrators
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1" />
          <ThemeModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Icons.CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/account-settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
