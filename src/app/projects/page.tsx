// app/projects/page.tsx
import BuildingsListClient from './BuildingsListClient';

interface Building {
  id: number;
  name: string;
  location: string;
  image: string;
  status?: number;
  reserved?: number;
}

async function getBuildings(): Promise<Building[]> {
  const res = await fetch('http://localhost:4000/buildings', {
    cache: 'no-store', // Disable caching
  });

  if (!res.ok) {
    throw new Error('Failed to fetch buildings');
  }

  return res.json();
}

export default async function ProjectsPage() {
  const buildings = await getBuildings();

  return (
    <div className="p-6 select-none bg-[#27446C] min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Projects</h2>
      <BuildingsListClient buildings={buildings} />
    </div>
  );
}


