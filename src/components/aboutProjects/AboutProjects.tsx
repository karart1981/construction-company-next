'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="py-10 px-6 md:px-20 bg-[#26466e]">
      <h2 className="text-[50px] font-bold mb-12 text-center text-white leading-[100%]">
        900 residential projects
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mt-6 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 text-center pb-10 md:pb-12 lg:pb-16 max-w-7xl mx-auto">
          Discover a selection of our finest construction projects, from residential buildings to commercial spaces. Each project showcases our commitment to quality, innovation, and craftsmanship. We take pride in transforming ideas into reality and building environments that inspire, endure, and exceed expectations in every detail.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <Image
              width={400}
              height={240}
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center bg-white py-4 px-8 rounded-2xl">
           <Link className="text-white m-auto text-[22px] tracking-[2px]" href="/projects">MORE</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

