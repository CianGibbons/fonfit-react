import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index
});

function Index() {
  return <div className="p-2">Hello from Index!</div>;
}
