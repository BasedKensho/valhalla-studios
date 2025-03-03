import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Booking } from '../types/supabase';

export const useBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setBookings(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const createBooking = async (booking: Omit<Booking, 'id' | 'created_at' | 'status'>) => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([{ ...booking, status: 'pending' }])
        .select()
        .single();

      if (error) throw error;
      setBookings(prev => [data, ...prev]);
      return data;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to create booking');
    }
  };

  return { bookings, loading, error, createBooking };
};