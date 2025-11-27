export interface Course {
  id: string;
  title: string;
  instructor: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  image: string;
  rating: number;
  badge?: string;
}

export interface Path {
  id: string;
  title: string;
  icon: string;
  color: string;
  courseCount: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface User {
  name: string;
  avatar: string;
  rank: string;
}