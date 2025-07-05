// app/login/page.tsx
import { getSessionUser } from '@/utils/session';
import { redirect } from 'next/navigation';
import LoginClient from './LoginClient';

export default function LoginPage() {
  const user = getSessionUser();

  if (user) {
    redirect('/profile'); // already logged in
  }

  return <LoginClient />;
}




