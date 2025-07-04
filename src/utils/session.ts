export interface Reservation {
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

export interface User {
  name: string;
  email: string;
  image?: string;
  token?: string;
}

export const setSessionUser = (user: User): void => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('user', JSON.stringify(user));
  }
};

export const getSessionUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) as User : null;
  }
  return null;
};

export const isUserLoggedIn = (): boolean => {
  const user = getSessionUser();
  return !!user && !!user.token;
};

export const logoutUser = (): void => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('user');
    localStorage.removeItem('userReservations'); // Clear reservations on logout
  }
};

export const getUserReservations = (): Reservation[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('userReservations');
    return data ? JSON.parse(data) : [];
  }
  return [];
};
