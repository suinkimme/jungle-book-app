import { ThemeProvider } from '@/components/theme-provider';
import { Dashboard } from '@/pages';

export default function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}
