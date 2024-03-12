import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/account')({
  component: Account
});

function Account() {
  return (
    <>
      <h1>Hello from Account!</h1>
    </>
  );
}
