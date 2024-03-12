import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/login')({
  component: Login
});

function Login() {
  return (
    <>
      <h1>Hello from Login!</h1>
    </>
  );
}
