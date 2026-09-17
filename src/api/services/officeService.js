import { mockDelay } from '@/store/lib/mockDelay.js';
import { mockOffice } from '@/data/mockOffice.js';

// TODO: apiClient.get(ENDPOINTS.office)
export async function getOfficeData() {
  await mockDelay();
  return mockOffice;
}
