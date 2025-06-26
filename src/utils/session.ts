// src/utils/session.ts

export interface User {
  name: string;
  email: string;
  token?: string; // Add other fields as needed
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
  }
};


