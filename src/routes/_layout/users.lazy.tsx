import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/users')({
  component: Users
});

function Users() {
  return (
    <>
      <h1>Hello from Users!</h1>
    </>
  );
}
