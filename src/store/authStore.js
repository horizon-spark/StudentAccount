import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as authService from '@/api/services/authService.js';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      status: 'idle',
      error: null,

      login: async (credentials) => {
        set({ status: 'loading', error: null });
        try {
          const { user, token } = await authService.login(credentials);
          set({ user, token, status: 'success', error: null });
        } catch (e) {
          set({ status: 'error', error: e.message ?? 'Ошибка входа' });
          throw e;
        }
      },

      logout: async () => {
        try {
          await authService.logout();
        } finally {
          set({ user: null, token: null, status: 'idle', error: null });
        }
      },

      fetchMe: async () => {
        if (!get().token) return;
        try {
          const user = await authService.getMe();
          set({ user });
        } catch {
          set({ user: null, token: null });
        }
      },
    }),
    {
      name: 'lk-auth',
      partialize: (s) => ({ token: s.token, user: s.user }),
    },
  ),
);

// Селектор — использовать в компонентах
export const selectIsAuthenticated = (s) => Boolean(s.token);
