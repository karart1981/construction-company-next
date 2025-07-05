'use client';

interface Reservation {
  buildingId: number;
  buildingName: string;
  location: string;
  apartment: {
    area: number;
    rooms: number;
    price: number;
    image: string;
  };
  date: string;
}

interface Props {
  reservation: Reservation;
}

export default function ReservationItem({ reservation }: Props) {
  return (
    <li className="bg-white rounded-lg shadow p-4">
      <p><strong>Building:</strong> {reservation.buildingName}</p>
      <p><strong>Location:</strong> {reservation.location}</p>
      <p>
        <strong>Apartment:</strong> Rooms: {reservation.apartment.rooms}, Area: {reservation.apartment.area} m², Price: {reservation.apartment.price.toLocaleString()} $
      </p>
      <p><strong>Reserved At:</strong> {new Date(reservation.date).toLocaleString()}</p>
    </li>
  );
}
