import { create } from 'zustand';
import { getPersonalData } from '@/api/services/studentService.js';
import { createAsyncSlice } from './lib/createAsyncSlice.js';

export const usePersonalDataStore = create((set, get) => ({
  ...createAsyncSlice(set, get, getPersonalData, { cache: true }),
}));
