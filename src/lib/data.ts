// Define the Building type based on your data structure
type Building = {
  id: number;
  name: string;
  area: number;
  rooms: number;
  price: number;
  status: 'available' | 'sold' | 'reserved'; // adjust if needed
};

export async function fetchBuildings(): Promise<Building[]> {
  const res = await fetch('http://localhost:4000/buildings');
  const data = await res.json();
  return data; // assuming it's a flat array of buildings
}

export async function fetchBuildingById(id: number): Promise<Building | undefined> {
  const res = await fetch('http://localhost:4000/buildings');
  const data = await res.json();
  return data.find((b: Building) => b.id === id);
}


