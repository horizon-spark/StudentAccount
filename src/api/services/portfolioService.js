import { mockDelay } from '@/store/lib/mockDelay.js';
import { mockPortfolio } from '@/data/mockPortfolio.js';

// TODO: apiClient.get(ENDPOINTS.portfolio)
export async function getPortfolio() {
  await mockDelay();
  return mockPortfolio;
}
