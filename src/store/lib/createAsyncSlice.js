/**
 * Общий паттерн async-слайса для zustand.
 *
 * @param {Function} set   — zustand set
 * @param {Function} get   — zustand get
 * @param {Function} fetcher — async (...args) => data
 * @param {Object}   [options]
 * @param {boolean}  [options.cache=false] — не перезапрашивать, если уже success
 */
export const createAsyncSlice = (set, get, fetcher, { cache = false } = {}) => ({
  data: null,
  status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
  error: null,

  fetch: async (...args) => {
    if (cache && get().status === 'success') return get().data;
    if (get().status === 'loading') return;

    set({ status: 'loading', error: null });
    try {
      const data = await fetcher(...args);
      set({ data, status: 'success', error: null });
      return data;
    } catch (e) {
      const message = e?.message ?? 'Не удалось загрузить данные';
      set({ status: 'error', error: message });
      throw e;
    }
  },

  reset: () => set({ data: null, status: 'idle', error: null }),
});
