// app/(auth)/login/page.tsx
import { Suspense } from 'react';
import TechnologyClient from './TechnologyClient';

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-white">
          
        </div>
      }
    >
      <TechnologyClient />
    </Suspense>
  );
}
