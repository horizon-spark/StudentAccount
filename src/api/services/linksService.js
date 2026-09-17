import { mockDelay } from '@/store/lib/mockDelay.js';
import { mockLinks } from '@/data/mockLinks.js';

// TODO: apiClient.get(ENDPOINTS.links)
export async function getLinks() {
  await mockDelay();
  return mockLinks;
}
