import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/orders')({
  component: Orders
});

function Orders() {
  return <div className="p-2">Hello from Orders!</div>;
}
