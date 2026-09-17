import { create } from 'zustand';
import { getContacts } from '@/api/services/contactsService.js';
import { createAsyncSlice } from './lib/createAsyncSlice.js';

export const useContactsStore = create((set, get) => ({
  ...createAsyncSlice(set, get, getContacts, { cache: true }),
}));
