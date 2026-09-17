import { create } from 'zustand';
import { getDashboardWidgets } from '@/api/services/studentService.js';
import { createAsyncSlice } from './lib/createAsyncSlice.js';

export const useDashboardStore = create((set, get) => ({
  ...createAsyncSlice(set, get, getDashboardWidgets), // без cache — всегда свежее
}));
