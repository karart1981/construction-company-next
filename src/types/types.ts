// types/news.ts
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



