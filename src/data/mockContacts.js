// mockContacts.js
// ВНИМАНИЕ: это тестовые данные. Все совпадения случайны.
// Домен example.invalid зарезервирован RFC 2606 и не существует.

export const mockContacts = {
  // === Учебное подразделение ===
  academicUnit: {
    fullName: 'Моковый институт №1',
    head: {
      id: 'head-1',
      name: 'Тестов Тест Тестович',
      position: 'Директор (мок)',
      email: 'head.mock@example.invalid',
      phone: '+7 (000) 000-00-01',
      extra: [{ type: 'vk', label: 'ВКонтакте (мок)', href: 'https://example.invalid/mock-vk' }],
    },
    deputies: [
      {
        id: 'dep-1',
        name: 'Мокова Анна Тестовна',
        position: 'Заместитель директора (мок)',
        email: 'dep1.mock@example.invalid',
        phone: '+7 (000) 000-00-02',
      },
      {
        id: 'dep-2',
        name: 'Примеров Дмитрий Мокович',
        position: 'Заместитель директора (мок)',
        email: 'dep2.mock@example.invalid',
        phone: '+7 (000) 000-00-03',
      },
    ],
    studentSpecialists: [
      {
        id: 'spec-1',
        name: 'Заглушкина Ольга Тестовна',
        position: 'Специалист по работе со студентами (мок)',
        email: 'spec1.mock@example.invalid',
        phone: '+7 (000) 000-00-04',
        extra: [
          {
            type: 'telegram',
            label: '@mock_students',
            href: 'https://example.invalid/mock-tg',
          },
        ],
      },
    ],
  },

  // === Куратор академической группы ===
  curator: {
    id: 'cur-1',
    name: 'Демова Мария Моковна',
    position: 'Доцент (мок)',
    department: 'Кафедра моковых дисциплин',
    email: 'curator.mock@example.invalid',
    phone: '+7 (000) 000-00-05',
    extra: [{ type: 'vk', label: 'ВКонтакте (мок)', href: 'https://example.invalid/mock-vk' }],
  },

  // === Техническая поддержка ===
  techSupport: {
    title: 'Моковая техподдержка',
    description: 'Моковое описание: поддержка сервисов (не настоящая)',
    links: [
      {
        id: 'uit-page',
        label: 'Страница техподдержки (мок)',
        href: 'https://example.invalid/mock-support',
        external: true,
      },
      {
        id: 'uit-help',
        label: 'Чат поддержки (мок)',
        href: 'https://example.invalid/mock-support-chat',
        external: true,
      },
    ],
    contacts: [
      { id: 'ts-1', label: 'Горячая линия (мок)', value: '+7 (000) 000-00-99' },
      { id: 'ts-2', label: 'Email (мок)', value: 'support.mock@example.invalid' },
    ],
  },

  // === Бухгалтерия ===
  accounting: {
    title: 'Моковая бухгалтерия',
    description: 'Моковое описание: оплата, возвраты (не настоящее)',
    specialists: [
      {
        id: 'acc-1',
        name: 'Фикстурова Наталья Тестовна',
        position: 'Специалист (мок)',
        email: 'acc1.mock@example.invalid',
        phone: '+7 (000) 000-00-10',
      },
      {
        id: 'acc-2',
        name: 'Сэмплова Татьяна Моковна',
        position: 'Специалист (мок)',
        email: 'acc2.mock@example.invalid',
        phone: '+7 (000) 000-00-11',
      },
    ],
  },

  // === Студенческий офис ===
  studentOffice: {
    title: 'Моковый студенческий офис',
    description: 'Моковое описание: заявки, справки (не настоящее)',
    pageUrl: 'https://example.invalid/mock-student-office',
    specialists: [
      {
        id: 'so-1',
        name: 'Плейсхолдерова Ольга Тестовна',
        institute: 'Моковый институт №1',
        email: 'so1.mock@example.invalid',
        phone: '+7 (000) 000-00-20',
      },
      {
        id: 'so-2',
        name: 'Стабова Татьяна Моковна',
        institute: 'Моковый институт №2',
        email: 'so2.mock@example.invalid',
        phone: '+7 (000) 000-00-21',
      },
      {
        id: 'so-3',
        name: 'Дампов Павел Тестович',
        institute: 'Моковый институт №3',
        email: 'so3.mock@example.invalid',
        phone: '+7 (000) 000-00-22',
      },
    ],
  },

  // === Управление молодёжной политики ===
  youthPolicy: {
    title: 'Моковое управление молодёжной политики',
    description: 'Моковое описание: воспитательная работа (не настоящее)',
    pageUrl: 'https://example.invalid/mock-youth',
    departments: [
      { id: 'yp-1', name: 'Моковый отдел №1', phone: '+7 (000) 000-01-01' },
      { id: 'yp-2', name: 'Моковый отдел №2', phone: '+7 (000) 000-01-02' },
      { id: 'yp-3', name: 'Моковый отдел №3', phone: '+7 (000) 000-01-03' },
    ],
  },

  // === Другие полезные контакты ===
  other: {
    title: 'Другие моковые контакты',
    items: [
      {
        id: 'chat-inst',
        label: 'Чат института (мок)',
        href: 'https://example.invalid/mock-inst-chat',
        external: true,
      },
      {
        id: 'chat-dorm',
        label: 'Чат общежития (мок)',
        href: 'https://example.invalid/mock-dorm-chat',
        external: true,
      },
      {
        id: 'chat-sport',
        label: 'Спортивный клуб (мок)',
        href: 'https://example.invalid/mock-sport',
        external: true,
      },
      {
        id: 'decanat',
        label: 'Деканат — общий телефон (мок)',
        value: '+7 (000) 000-00-00',
      },
    ],
  },
};
