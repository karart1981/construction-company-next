// Define the Building type based on your data structure
export type Building = {
  id: number;
  name: string;
  location: string;
  status: 'available' | 'sold' | 'reserved'; // or other values if needed
  image: string;
  apartments: Apartment[];
};

export type Apartment = {
  area: number;
  rooms: number;
  price: number;
  status: string;
  reserved: string;
  image: string;
  quantity: number;
};

export async function fetchBuildings(): Promise<Building[]> {
  const res = await fetch('https://karart1981.github.io/host_api/db.json');
  const data = await res.json();
  return data.buildings; // FIXED: access the correct key
}

export async function fetchBuildingById(id: number): Promise<Building | undefined> {
  const res = await fetch('https://karart1981.github.io/host_api/db.json');
  const data = await res.json();
  return data.buildings.find((b: Building) => b.id === id); // FIXED: search inside buildings
}





