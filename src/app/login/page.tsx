// app/login/page.tsx (Server Component)
import { getSessionUser } from '@/utils/session';
import { redirect } from 'next/navigation';
import LoginClient from './LoginClient';

export default function LoginPage() {
  const user = getSessionUser(); // server-side session check

  if (user) {
    redirect('/profile');
  }

  return <LoginClient />;
}



