import { useEffect } from 'react';

/**
 * Обёртка над доменным стором: вызывает fetch на маунте.
 *   const { data, status, error, fetch } = useAsyncData(useUserStore);
 */
export function useAsyncData(store) {
  const data = store((s) => s.data);
  const status = store((s) => s.status);
  const error = store((s) => s.error);
  const fetch = store((s) => s.fetch);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, status, error, fetch };
}
