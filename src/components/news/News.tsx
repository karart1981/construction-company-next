'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { NewsItem } from '@/types/types';

export default function NewsList() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:4000/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }
        const data: NewsItem[] = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  if (loading) {
    return <p className="text-center text-white">Loading news...</p>;
  }

  return (
    <section className="bg-[#1b366b] w-full py-12 px-4">
      <h2 className="text-white text-4xl font-bold mb-10 text-center">Real Construction News</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {news.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="relative w-full h-56">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1b366b] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{new Date(item.date).toLocaleDateString()}</p>
              <p className="text-gray-700">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < news.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleShowMore}
            className="bg-white text-[#1b366b] font-semibold py-2 px-6 rounded-full shadow hover:shadow-lg transition cursor-pointer"
          >
            More News
          </button>
        </div>
      )}
    </section>
  );
}
