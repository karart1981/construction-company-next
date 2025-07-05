export interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
}
export interface User {
  name: string;
  email: string;
  password: string;
  image?: string;
  token?: string;
}
export interface FormState {
  email: string;
  password: string;
}

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};
export interface Config {
  buttonD: string;
  buttonT: string;
  shadowSize: string;
  roundnessSize: string;
  buttonDToBottom: string;
  buttonDToRight: string;
  selectedBackgroundColor: string;
  selectedIconColor: string;
  buttonWidth: string;
  buttonHeight: string;
  svgWidth: string;
  svgHeight: string;
}

export type Mode = 'buy' | 'build';

export interface Building {
  id: number;
  name: string;
  location: string;
  image: string;
  status?: number;
  reserved?: number;
}
export interface FormData {
  email: string;
  name: string;
  message: string;
}

export interface ContactCardItem {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

export type Partner = {
  id: number;
  logo: string;
  alt: string;
};

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

export interface UserRes {
  name: string;
  email: string;
  image?: string;
  token?: string;
  reservations?: Reservation[];
}
