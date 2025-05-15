import { ThemeProvider } from '@/components/theme-provider';
import { AppLayout } from '@/components/layout/app-layout';
import { Dashboard } from '@/pages';

export default function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <Dashboard />
      </AppLayout>
    </ThemeProvider>
  );
}
