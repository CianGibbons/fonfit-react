import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/clients')({
  component: Clients
});

function Clients() {
  return <div className="p-2">Hello from Clients!</div>;
}
