import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/account')({
  component: Account
});

function Account() {
  return <div className="p-2">Hello from Account!</div>;
}
