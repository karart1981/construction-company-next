import { getSessionUser } from '@/utils/session';
import { redirect } from 'next/navigation';
import LoginClient from '../../components/profile/LoginClient';

export default function LoginPage() {
  const user = getSessionUser();

  if (user) {
    redirect('/profile'); 
  }

  return <LoginClient />;
}




