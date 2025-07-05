'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Building {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Projects = () => {
  const [buildings, setBuildings] = useState<Building[]>([]);

  useEffect(() => {
    fetch('https://karart1981.github.io/host_api/db.json')
      .then((res) => res.json())
      .then((data) => setBuildings(data.buildings))
      .catch((error) => console.error('Error fetching buildings:', error));
  }, []);

  return (
    <div className="py-10 px-6 md:px-20 bg-[var(--dark-blue)] select-none">
      <h2 className="text-[50px] font-bold mb-12 text-center text-white leading-[100%]">
        900 residential projects
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mt-6 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 text-center pb-10 md:pb-12 lg:pb-16 max-w-7xl mx-auto">
        Discover a selection of our finest construction projects, from residential buildings to commercial spaces. Each project showcases our commitment to quality, innovation, and craftsmanship.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {buildings.slice(0, 8).map((building) => (
          <div
            key={building.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden"
          >
           <div className="overflow-hidden">
              <Image
                width={400}
                height={240}
                src={building.image}
                alt={building.name || 'Building image'}
                className="w-full h-60 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>


            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {building.name}
              </h3>
              <p className="text-gray-600 mt-2">{building.description}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center bg-white py-4 px-8 rounded-2xl">
          <Link
            className="flex justify-center items-center text-[var(--dark-blue)] font-bold hover:opacity-[var(--opacity)] m-auto text-[22px] tracking-[2px] w-full h-full transition-[var(--transition)]"
            href="/projects"
          >
            MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
