// app/dashboard/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import ClientDashboard from '@/components/profile/ClientProfile';
import News from '@/components/news/News';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  return (
    <>
      <ClientDashboard />
      <News />
    </>
  );
}

