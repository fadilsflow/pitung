// components/HomeWelcomeToast.tsx
'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

interface HomeWelcomeToastProps {
  message?: string;
}

export default function HomeWelcomeToast({ message = 'Welcome to Home Page! 👋' }: HomeWelcomeToastProps) {
  useEffect(() => {
    toast.success(message, {
      position: 'top-right',
      duration: 3000,
      className: 'home-toast',
    });
  }, [message]);

  return null;
}