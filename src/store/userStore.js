import { create } from 'zustand';
import { getStudentProfile } from '@/api/services/studentService.js';
import { createAsyncSlice } from './lib/createAsyncSlice.js';

export const useUserStore = create((set, get) => ({
  ...createAsyncSlice(set, get, getStudentProfile, { cache: true }),
}));
