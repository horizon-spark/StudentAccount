// mockLinks.js
// ВНИМАНИЕ: это тестовые данные. Все совпадения случайны.
// Домен example.invalid зарезервирован RFC 2606 и не существует.

export const mockLinks = [
  {
    id: 'schedule',
    title: 'Расписание занятий',
    description: 'Моковое описание: расписание по группам и преподавателям',
    icon: 'calendar',
    links: [
      {
        id: 'schedule-page',
        label: 'Страница расписания (мок)',
        href: 'https://example.invalid/mock-schedule',
        external: true,
      },
      {
        id: 'schedule-bot',
        label: 'Telegram-бот с расписанием (мок)',
        href: 'https://example.invalid/mock-tg-schedule',
        external: true,
      },
    ],
  },
  {
    id: 'eios',
    title: 'Вход в ЭИОС',
    description: 'Моковое описание: электронная информационно-образовательная среда',
    icon: 'eios',
    links: [
      {
        id: 'eios-login',
        label: 'Личный кабинет ЭИОС (мок)',
        href: 'https://example.invalid/mock-eios',
        external: true,
      },
    ],
  },
  {
    id: 'associations',
    title: 'Студенческие объединения',
    description: 'Моковое описание: клубы, секции, творческие и научные объединения',
    icon: 'associations',
    links: [
      {
        id: 'associations-page',
        label: 'Все объединения (мок)',
        href: 'https://example.invalid/mock-associations',
        external: true,
      },
    ],
  },
  {
    id: 'library',
    title: 'Библиотечные сервисы',
    description: 'Моковое описание: электронные библиотечные системы и сервисы',
    icon: 'library',
    links: [
      {
        id: 'library-page',
        label: 'Библиотека (мок)',
        href: 'https://example.invalid/mock-library',
        external: true,
      },
      {
        id: 'ebs-1',
        label: 'Моковая ЭБС №1',
        href: 'https://example.invalid/mock-ebs-1',
        external: true,
      },
      {
        id: 'ebs-2',
        label: 'Моковая ЭБС №2',
        href: 'https://example.invalid/mock-ebs-2',
        external: true,
      },
    ],
  },
  {
    id: 'dorm',
    title: 'Вопросы общежития',
    description: 'Моковое описание: заселение, оплата, правила проживания',
    icon: 'dorm',
    links: [
      {
        id: 'dorm-page',
        label: 'Страница общежития (мок)',
        href: 'https://example.invalid/mock-dorm',
        external: true,
      },
      {
        id: 'dorm-chat',
        label: 'Чат общежития (мок)',
        href: 'https://example.invalid/mock-tg-dorm',
        external: true,
      },
    ],
  },
  {
    id: 'events',
    title: 'Календарь событий',
    description: 'Моковое описание: мероприятия института и университета',
    icon: 'events',
    links: [
      {
        id: 'events-page',
        label: 'Календарь событий (мок)',
        href: '/mock-events',
      },
    ],
  },
  {
    id: 'online-services',
    title: 'Онлайн-сервисы для студентов',
    description: 'Моковое описание: портал услуг, заявки, документы',
    icon: 'services',
    links: [
      {
        id: 'services-page',
        label: 'Онлайн-сервисы (мок)',
        href: 'https://example.invalid/mock-services',
        external: true,
      },
    ],
  },
  {
    id: 'email',
    title: 'Электронная почта',
    description: 'Моковое описание: корпоративная почта студента',
    icon: 'mail',
    links: [
      {
        id: 'email-login',
        label: 'Вход в почту (мок)',
        href: 'https://example.invalid/mock-mail',
        external: true,
      },
    ],
  },
];
