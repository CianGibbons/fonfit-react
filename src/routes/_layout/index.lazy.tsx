import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/')({
  component: Index
});

function Index() {
  return (
    <>
      <h1>Hello from Dashboard!</h1>
    </>
  );
}
