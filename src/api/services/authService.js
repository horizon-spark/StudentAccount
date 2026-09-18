import { mockDelay } from '@/store/lib/mockDelay.js';
import { mockStudent } from '@/data/mockStudent.js';

// TODO: заменить на apiClient.post('/auth/login', { email, password })
export async function login({ email, password }) {
  await mockDelay();
  if (!email || !password) {
    throw new Error('Введите email и пароль');
  }

  return {
    user: {
      id: 'u-1',
      email,
      firstName: mockStudent.firstName,
      lastName: mockStudent.lastName,
      photoUrl: mockStudent.photoUrl,
    },
    token: 'mock-jwt-token',
  };
}

// TODO: заменить на apiClient.post('/auth/logout')
export async function logout() {
  await mockDelay(200);
  return { ok: true };
}

// TODO: заменить на apiClient.get('/auth/me')
export async function getMe() {
  await mockDelay();
  return {
    id: 'u-1',
    email: 'student@example.ru',
    firstName: mockStudent.firstName,
    lastName: mockStudent.lastName,
    photoUrl: mockStudent.photoUrl,
  };
}
