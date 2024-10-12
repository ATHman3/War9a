'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeProviders({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Only allow the theme switcher to appear once the component is mounted
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
