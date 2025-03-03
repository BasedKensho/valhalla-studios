export interface Booking {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  timezone: string;
  preferred_time: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}