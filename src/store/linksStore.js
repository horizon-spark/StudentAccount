import { create } from 'zustand';
import { getLinks } from '@/api/services/linksService.js';
import { createAsyncSlice } from './lib/createAsyncSlice.js';

export const useLinksStore = create((set, get) => ({
  ...createAsyncSlice(set, get, getLinks, { cache: true }),
}));
