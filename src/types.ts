export interface Service {
  id: string;
  name: string;
  price: number;
  category: 'haircut' | 'styling' | 'grooming' | 'treatment';
  duration: string; // e.g., "30 mins"
  description: string;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  servicesIncluded: string[];
  description: string;
  badge?: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  rating: number;
  bio: string;
  imageUrl?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  isVerified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Booking {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  serviceId: string;
  packageId?: string; // Optional if package is selected instead
  stylistId: string;
  date: string; // "YYYY-MM-DD"
  time: string; // "HH:MM"
  status: 'confirmed' | 'cancelled';
  totalPrice: number;
  notes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}
