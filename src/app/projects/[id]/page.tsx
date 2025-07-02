import { notFound } from 'next/navigation';
import BuildingDetailClient from './BuildingDetailClient';

interface Apartment {
  area: number;
  rooms: number;
  price: number;
  status: string;
  reserved: string;
  image: string;
  quantity: number;
}

interface Building {
  id: number;
  name: string;
  location: string;
  status: string;
  image: string;
  apartments: Apartment[];
}

// This is the correct type for dynamic route pages in Next.js App Router
export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const res = await fetch(`http://localhost:4000/buildings/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) return notFound();

  const building: Building = await res.json();

  return <BuildingDetailClient building={building} />;
}


