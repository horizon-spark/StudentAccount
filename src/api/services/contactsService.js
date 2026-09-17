import { mockDelay } from '@/store/lib/mockDelay.js';
import { mockContacts } from '@/data/mockContacts.js';

// TODO: apiClient.get(ENDPOINTS.contacts)
export async function getContacts() {
  await mockDelay();
  return mockContacts;
}
