import { mockDelay } from '@/store/lib/mockDelay.js';
import { mockStudent } from '@/data/mockStudent.js';

// TODO: apiClient.get(ENDPOINTS.student.profile)
export async function getStudentProfile() {
  await mockDelay();
  const {
    firstName,
    middleName,
    lastName,
    group,
    faculty,
    photoUrl,
    greeting,
    todayLessonsCount,
    services,
  } = mockStudent;
  return {
    firstName,
    middleName,
    lastName,
    group,
    faculty,
    photoUrl,
    greeting,
    todayLessonsCount,
    services,
  };
}

// TODO: apiClient.get(ENDPOINTS.student.personalData)
export async function getPersonalData() {
  await mockDelay();
  return mockStudent.general;
}

// TODO: apiClient.get(ENDPOINTS.student.education)
export async function getEducation() {
  await mockDelay();
  return mockStudent.education;
}

// TODO: apiClient.get(ENDPOINTS.student.widgets)
export async function getDashboardWidgets() {
  await mockDelay();
  return mockStudent.widgets;
}
