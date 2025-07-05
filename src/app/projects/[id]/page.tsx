'use client';

import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { Apartment, BuildingProf, Reservation } from '@/types/types'; 

const updateUserReservation = (reservation: Reservation) => {
  const key = 'userReservations';
  const stored = localStorage.getItem(key);
  const reservations: Reservation[] = stored ? JSON.parse(stored) : [];
  reservations.push(reservation);
  localStorage.setItem(key, JSON.stringify(reservations));
};

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Number(params?.id);

  const [building, setBuilding] = useState<BuildingProf | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const fetchBuilding = useCallback(async () => {
    try {
      const res = await fetch('https://karart1981.github.io/host_api/db.json');
      const data = await res.json();
      const found = data.buildings.find((b: BuildingProf) => Number(b.id) === id);
      if (!found) throw new Error('Building not found');
      setBuilding(found);
    } catch (err) {
      console.error(err);
      setError(`Project with ID ${id} not found or failed to fetch.`);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) fetchBuilding();
  }, [id, fetchBuilding]);

  const handleReserve = (index: number) => {
    if (!building) return;

    const updated = [...building.apartments];
    const apt = updated[index];

    if (apt.quantity > 0) {
      apt.quantity -= 1;
      if (apt.quantity === 0) apt.status = 'reserved';

      setBuilding({ ...building, apartments: updated });
      setSelectedApartment(apt);
      setShowModal(true);

      updateUserReservation({
        buildingId: building.id,
        buildingName: building.name,
        location: building.location,
        apartment: {
          area: apt.area,
          rooms: apt.rooms,
          price: apt.price,
          image: apt.image,
        },
        date: new Date().toISOString(),
      });
    }
  };

  const handleSendEmail = async () => {
    if (!selectedApartment || !building) return;
    setSending(true);

    const templateParams = {
      phone: phoneNumber,
      building: building.name,
      location: building.location,
      apartment: `Rooms: ${selectedApartment.rooms}, Area: ${selectedApartment.area} m², Price: ${selectedApartment.price.toLocaleString()} $`,
    };

    try {
      await emailjs.send(
        'service_82wrnaf',
        'template_1bed2hy',
        templateParams,
        'CJAVaMvYuQRJ5LSwH'
      );
      setSent(true);
    } catch (err) {
      console.error('Email send failed:', err);
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (error || !building) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-[#91b3e0] select-none">
      <div className="max-w-7xl mx-auto">
        <Image
          src={building.image}
          alt={building.name}
          width={1000}
          height={500}
          className="w-full h-full object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold text-[#27446C] mb-2">{building.name}</h1>
        <p className="text-gray-700 mb-6">{building.location}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {building.apartments.map((apt, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
              <Image
                src={apt.image}
                alt={`Apartment ${apt.rooms} rooms`}
                width={400}
                height={200}
                className="rounded h-full w-full object-cover"
              />
              <div className="mt-3 flex gap-2 mb-2">
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {apt.rooms} bedroom
                </span>
                <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Balcony
                </span>
              </div>
              <p className="text-sm text-gray-800 mb-1">📐 Area: {apt.area} m²</p>
              <p className="text-sm text-gray-800 mb-1">💵 Price: {apt.price.toLocaleString()} $</p>
              <p className="text-sm text-gray-800 mb-1">🏢 Quantity: {apt.quantity}</p>
              <p className="text-sm mb-2">
                🏷️ Status:{' '}
                <span
                  className={
                    apt.status === 'available'
                      ? 'text-green-600 font-semibold'
                      : apt.status === 'reserved'
                      ? 'text-yellow-600 font-semibold'
                      : 'text-red-600 font-semibold'
                  }
                >
                  {apt.status}
                </span>
              </p>

              <button
                onClick={() => handleReserve(idx)}
                disabled={apt.status === 'reserved'}
                className={`mt-auto px-4 py-2 rounded text-white font-semibold cursor-pointer transition ${
                  apt.status === 'reserved'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#27446C] hover:bg-[#1d3550]'
                }`}
              >
                Reserve
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/projects">
            <button className="bg-[#27446C] text-white px-4 py-2 rounded hover:bg-[#1d3550] cursor-pointer">
              ← Back to Projects
            </button>
          </Link>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            {!sent ? (
              <>
                <h2 className="text-xl font-semibold mb-4 text-center text-[#27446C]">
                  ✅ Successfully Reserved!
                </h2>
                <p className="mb-3 text-sm text-gray-700">
                  Leave your phone number and we will contact you.
                </p>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full border px-4 py-2 rounded mb-4"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button
                  onClick={handleSendEmail}
                  disabled={sending || phoneNumber.length < 4}
                  className="w-full bg-[#27446C] text-white py-2 rounded hover:bg-[#1d3550] cursor-pointer"
                >
                  {sending ? 'Sending...' : 'Send'}
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-center text-green-600 mb-4">🎉 Thank you!</h2>
                <p className="text-sm text-gray-700 text-center">We will contact you shortly.</p>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setPhoneNumber('');
                    setSent(false);
                  }}
                  className="mt-4 w-full bg-[#27446C] text-white py-2 rounded cursor-pointer"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}







