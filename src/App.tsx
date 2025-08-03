import { LandingPage } from '@/pages';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CustomCursor, FloatingParticles } from '@/components/ui';
import '@/styles/globals.css';

function App() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <FloatingParticles count={15} />
      <LandingPage />
    </LanguageProvider>
  );
}

export default App;