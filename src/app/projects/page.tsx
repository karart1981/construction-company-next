import BuildingGrid from '@/components/buildings/BuildingGrid';

async function getBuildings() {
  const res = await fetch('https://karart1981.github.io/host_api/db.json', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data.buildings;
}

export default async function ProjectsPage() {
  const buildings = await getBuildings();

  return (
    <div className="p-6 select-none bg-[var(--dark-blue)] min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Projects</h2>
      <BuildingGrid buildings={buildings} />
    </div>
  );
}




