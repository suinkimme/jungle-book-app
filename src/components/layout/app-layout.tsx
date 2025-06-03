import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="w-full max-w-[480px] mx-auto">
      <Outlet />
    </div>
  );
}
