import { create } from 'zustand';
import { getEducation } from '@/api/services/studentService.js';
import { createAsyncSlice } from './lib/createAsyncSlice.js';

export const useEducationStore = create((set, get) => ({
  ...createAsyncSlice(set, get, getEducation, { cache: true }),
}));
