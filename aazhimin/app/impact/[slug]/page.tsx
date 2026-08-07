// app/(auth)/login/page.tsx
import { Suspense } from 'react';
import ResearchClient from './ResearchClient';

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-white">
          
        </div>
      }
    >
      <ResearchClient />
    </Suspense>
  );
}
