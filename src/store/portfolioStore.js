import { create } from 'zustand';
import { getPortfolio } from '@/api/services/portfolioService.js';
import { createAsyncSlice } from './lib/createAsyncSlice.js';

export const usePortfolioStore = create((set, get) => ({
  ...createAsyncSlice(set, get, getPortfolio, { cache: true }),
}));
