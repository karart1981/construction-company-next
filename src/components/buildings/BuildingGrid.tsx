'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Building {
  id: number;
  name: string;
  location: string;
  image: string;
  status?: number;
  reserved?: number;
}

export default function BuildingGrid({ buildings }: { buildings: Building[] }) {
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {buildings.slice(0, visibleCount).map(building => (
          <div key={building.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
            <Image 
              src={building.image} 
              alt={building.name} 
              className="w-full h-40 object-cover rounded" 
              width={400}
              height={160}
            />
            <h2 className="text-xl font-semibold mt-2 h-[70px]">{building.name}</h2>
            <p className="text-gray-500 h-[70px]">{building.location}</p>
            <p className="mt-1 text-sm">🏢 {building.status}</p>
            <Link href={`/projects/${building.id}`} className="mt-auto">
              <button className="mt-4 w-full bg-[#27446C] text-white px-4 py-2 rounded hover:opacity-80 duration-300 cursor-pointer">
                More Information
              </button>
            </Link>
          </div>
        ))}
      </div>

      {visibleCount < buildings.length && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={handleShowMore}
            className="bg-white text-[#27446C] font-semibold px-6 py-3 rounded shadow hover:opacity-80 duration-300 cursor-pointer"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
}
