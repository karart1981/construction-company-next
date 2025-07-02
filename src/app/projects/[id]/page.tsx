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

async function getBuilding(id: number): Promise<Building | null> {
  try {
    const res = await fetch(`http://localhost:4000/buildings/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  const building = await getBuilding(id);

  if (!building) return notFound();

  return <BuildingDetailClient building={building} />;
}

