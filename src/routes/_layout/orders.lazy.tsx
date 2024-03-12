import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/orders')({
  component: Orders
});

function Orders() {
  return (
    <>
      <h1>Hello from Orders!</h1>
    </>
  );
}
