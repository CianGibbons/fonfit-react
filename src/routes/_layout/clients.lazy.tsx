import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/clients')({
  component: Clients
});

function Clients() {
  return (
    <>
      <h1>Hello from Clients!</h1>
    </>
  );
}
