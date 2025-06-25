export const setSessionUser = (user: any) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('user', JSON.stringify(user));
  }
};

export const getSessionUser = (): any | null => {
  if (typeof window !== 'undefined') {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const isUserLoggedIn = (): boolean => {
  const user = getSessionUser();
  return !!user && !!user.token; // Adjust based on your expected user structure
};

export const logoutUser = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('user');
  }
};

