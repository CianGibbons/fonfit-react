import { ThemeModeToggle } from './ui/theme-mode-toggle';

function Dashboard() {
  return (
    <>
      <div className="w-full text-center justify-center">
        <ThemeModeToggle />
        <div>Hello World</div>
      </div>
    </>
  );
}

export default Dashboard;
