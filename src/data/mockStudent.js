// mockStudent.js
// ВНИМАНИЕ: это тестовые данные. Все совпадения случайны.
// Домен example.invalid зарезервирован RFC 2606 и не существует.
// Паспорт, ИНН, СНИЛС — нулевые заглушки, не настоящие.

export const mockStudent = {
  firstName: 'Тест',
  middleName: 'Тестович',
  lastName: 'Тестов',
  group: 'МОК-01',
  faculty: 'Моковый факультет',
  photoUrl: '/avatars/avatar.png',
  greeting: 'Добрый день',
  todayLessonsCount: 2,

  // Быстрые ссылки для шапки/меню (опционально)
  services: {
    email: 'https://example.invalid/mock-mail',
    eios: 'https://example.invalid/mock-eios',
    site: 'https://example.invalid/mock-site',
    studentOffice: '/mock-office',
    contacts: '/mock-contacts',
    calendar: '/mock-events',
    eiosAnnouncements: 'https://example.invalid/mock-eios-announcements',
  },

  widgets: [
    // --- НОВЫЕ ---

    // Непрочитанные сообщения
    {
      id: 'unread',
      title: 'Непрочитанные сообщения',
      icon: 'mail',
      accent: 'warning',
      items: [
        {
          id: 'email',
          label: 'Электронная почта (мок)',
          value: 3,
          unit: 'непрочитанных',
          href: 'https://example.invalid/mock-mail',
          external: true,
        },
        {
          id: 'eios',
          label: 'ЭИОС (мок)',
          value: 12,
          unit: 'непрочитанных',
          href: 'https://example.invalid/mock-eios-messages',
          external: true,
        },
      ],
      more: {
        label: 'Подробнее',
        href: 'https://example.invalid/mock-eios-messages',
        external: true,
      },
    },

    // Календарь событий
    {
      id: 'calendar-events',
      title: 'Календарь событий',
      icon: 'calendar',
      items: [
        {
          id: 'ev-1',
          label: 'Моковое событие №1',
          value: '15 октября',
          href: '/mock-events/1',
        },
        {
          id: 'ev-2',
          label: 'Моковое событие №2',
          value: '22 октября',
          href: '/mock-events/2',
        },
        {
          id: 'ev-3',
          label: 'Моковое событие №3',
          value: '28 октября',
          href: '/mock-events/3',
        },
      ],
      more: { label: 'Все мероприятия', href: '/mock-events' },
    },

    // Новости вуза
    {
      id: 'news',
      title: 'Новости за неделю',
      icon: 'news',
      items: [
        {
          id: 'n-1',
          label: 'Моковая новость №1',
          href: '/mock-news/1',
        },
        {
          id: 'n-2',
          label: 'Моковая новость №2',
          href: '/mock-news/2',
        },
        {
          id: 'n-3',
          label: 'Моковая новость №3',
          href: '/mock-announcements/3',
        },
      ],
      more: { label: 'Все новости', href: '/mock-news' },
    },

    // Задолженности по оплате
    {
      id: 'debt',
      title: 'Задолженности по оплате',
      icon: 'warning',
      accent: 'warning',
      primary: 'Есть задолженность',
      secondary: 'Проверьте информацию в Студенческом офисе',
      more: { label: 'Студенческий офис', href: '/mock-office' },
    },

    // Техническая поддержка
    {
      id: 'support',
      title: 'Техническая поддержка',
      icon: 'support',
      items: [
        {
          id: 'support-general',
          label: 'Общая поддержка (мок)',
          href: 'https://example.invalid/mock-tg-support',
          external: true,
        },
        {
          id: 'support-dorm',
          label: 'Поддержка по общежитию (мок)',
          href: '/mock-contacts#dorm',
        },
      ],
      more: { label: 'Все контакты', href: '/mock-contacts' },
    },

    // Объявления в ЭИОС
    {
      id: 'announcements',
      title: 'Объявления',
      icon: 'announcement',
      primary: 'Моковые объявления',
      secondary: 'Собраны в ЭИОС (мок)',
      more: {
        label: 'Перейти в ЭИОС',
        href: 'https://example.invalid/mock-eios-announcements',
        external: true,
      },
    },

    // Мониторинг (анкеты)
    {
      id: 'surveys',
      title: 'Мониторинг',
      icon: 'survey',
      items: [
        {
          id: 'survey-1',
          label: 'Моковая анкета №1',
          value: 'до 20 октября',
          href: 'https://example.invalid/mock-eios-surveys/1',
          external: true,
        },
        {
          id: 'survey-2',
          label: 'Моковая анкета №2',
          value: 'до 1 ноября',
          href: 'https://example.invalid/mock-forms/2',
          external: true,
        },
      ],
    },
  ],

  general: {
    // Общая информация
    fullName: 'Тестов Тест Тестович',
    gender: 'Мужской',
    birthDate: '15.03.2004',
    militaryStatus: 'Моковый статус',
    gradeBookNumber: 'MOCK-0001',
    group: 'МОК-01',
    status: 'student', // 'student' | 'academic_leave'
    academicUnit: 'Моковая академия',
    institute: 'Моковый институт',
    faculty: 'Моковый факультет',
    direction: '00.00.00 Моковое направление',
    profile: 'Моковый профиль',
    educationForm: 'Очная',
    enrollmentYear: 2021,
    addressMain: 'Моковый адрес №1',
    addressDorm: 'Моковый адрес №2',

    // Образование (до вуза)
    educationType: 'Среднее (полное) общее образование',
    documentType: 'Моковый документ об образовании',
    educationInstitution: 'Моковая школа',
    educationEndYear: 2021,

    // Персональные документы (заглушки, не настоящие)
    passportSeries: '00 00',
    passportNumber: '000000',
    passportIssuedBy: 'Моковый орган выдачи',
    passportIssuedDate: '20.06.2020',
    inn: '000000000000',
    snils: '000-000-000 00',
    birthPlace: 'Моковый город',

    // Документы по обучению
    studyDocuments: [
      {
        id: 'doc-1',
        title: 'Моковый документ №1',
        status: 'Моковый статус',
        date: '01.09.2021',
      },
      {
        id: 'doc-2',
        title: 'Моковый документ №2',
        status: 'Моковый статус',
        date: null,
      },
      {
        id: 'doc-3',
        title: 'Моковый документ №3',
        status: 'Моковый статус',
        date: '15.02.2022',
      },
    ],
  },

  education: {
    // Электронный студенческий билет
    studentCard: {
      studentId: 'MOCK-0002',
      fullName: 'Тестов Тест Тестович',
      department: 'Моковый институт',
      educationForm: 'Очная',
      enrollmentOrder: 'Моковый приказ № MOCK-0003',
      validUntil: '31.08.2025',
      qrData: 'https://example.invalid/mock-eios/student/MOCK-0002',
    },

    // Электронная зачётная книжка
    gradeBook: {
      averageScore: 4.6,
      semesters: [
        {
          id: 's1',
          name: 'Моковый семестр №1',
          records: [
            {
              id: 'r1',
              date: '15.01.2022',
              discipline: 'Моковая дисциплина №1',
              hours: '144 / 4',
              attestation: 'Моковая аттестация №1',
              grade: '5',
              teacher: 'Тестов Т.Т.',
            },
            {
              id: 'r2',
              date: '20.01.2022',
              discipline: 'Моковая дисциплина №2',
              hours: '108 / 3',
              attestation: 'Моковая аттестация №2',
              grade: 'Зачтено',
              teacher: 'Мокова М.М.',
            },
          ],
        },
        {
          id: 's2',
          name: 'Моковый семестр №2',
          records: [
            {
              id: 'r3',
              date: '10.06.2022',
              discipline: 'Моковая дисциплина №3',
              hours: '144 / 4',
              attestation: 'Моковая аттестация №1',
              grade: '4',
              teacher: 'Моков М.М.',
            },
          ],
        },
      ],
    },

    // Учебный план
    curriculum: {
      fullPlanUrl: '/mock/docs/curriculum-full.pdf',
      byYear: [
        { id: 'y1', year: '2021/2022', url: '/mock/docs/curriculum-1.pdf' },
        { id: 'y2', year: '2022/2023', url: '/mock/docs/curriculum-2.pdf' },
        { id: 'y3', year: '2023/2024', url: '/mock/docs/curriculum-3.pdf' },
      ],
      kugUrl: '/mock/docs/kug.pdf',
      workProgramsUrl: '/mock/docs/work-programs.pdf',
    },

    // Курсы в ЭИОС
    eiosCourses: [
      {
        id: 'c1',
        name: 'Моковая дисциплина №1',
        url: 'https://example.invalid/mock-eios/course/101',
      },
      {
        id: 'c2',
        name: 'Моковая дисциплина №2',
        url: 'https://example.invalid/mock-eios/course/102',
      },
      {
        id: 'c3',
        name: 'Моковая дисциплина №3',
        url: 'https://example.invalid/mock-eios/course/103',
      },
    ],
    eiosLkUrl: 'https://example.invalid/mock-eios/my',

    // Графики индивидуальной работы преподавателей
    teacherScheduleUrl: '/mock/docs/teachers-schedule.pdf',
  },
};
