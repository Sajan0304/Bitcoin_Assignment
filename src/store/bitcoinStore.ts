import { create } from 'zustand';

interface BitcoinState {
  bitcoinData: any[];
  loading: boolean;
  error: string | null;
  setBitcoinData: (data: any[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useBitcoinStore = create<BitcoinState>((set) => ({
  bitcoinData: [],
  loading: false,
  error: null,
  setBitcoinData: (data) => set({ bitcoinData: data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
