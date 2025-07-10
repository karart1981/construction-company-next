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
  token?: string; // if present, used to check login state
}

/**
 * Save user to sessionStorage
 */
export const setSessionUser = (user: User): void => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('isLoggedIn', user.token ? 'true' : 'false');
    sessionStorage.setItem('isRegistered', 'true');
  }
};

/**
 * Get user from sessionStorage
 */
export const getSessionUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) as User : null;
  }
  return null;
};

/**
 * Check if user is logged in
 */
export const isUserLoggedIn = (): boolean => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }
  return false;
};

/**
 * Log out user: clear sessionStorage and reservations
 */
export const logoutUser = (): void => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('isRegistered');
    localStorage.removeItem('userReservations');
  }
};

/**
 * Get user reservations from localStorage
 */
export const getUserReservations = (): Reservation[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('userReservations');
    return data ? JSON.parse(data) : [];
  }
  return [];
};



