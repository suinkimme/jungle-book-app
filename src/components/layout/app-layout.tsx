import { Outlet } from 'react-router-dom';

import { useUserData } from '@/hooks';

export function AppLayout() {
  useUserData(); // 사용자 정보 전역 스토어에 저장

  return (
    <div className="w-full max-w-[480px] mx-auto">
      <Outlet />
    </div>
  );
}
