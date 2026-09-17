import { create } from 'zustand';
import { getOfficeData } from '@/api/services/officeService.js';
import { createAsyncSlice } from './lib/createAsyncSlice.js';

export const useOfficeStore = create((set, get) => ({
  ...createAsyncSlice(set, get, getOfficeData), // без cache — критичные данные
}));
