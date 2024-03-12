import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/settings')({
  component: Settings
});

function Settings() {
  return (
    <>
      <h1>Hello from Settings!</h1>
    </>
  );
}
