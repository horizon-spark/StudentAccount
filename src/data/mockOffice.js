export const mockOffice = {
  // === Академическая задолженность ===
  academicDebts: {
    hasDebts: true, // false, если задолженностей нет
    items: [
      {
        id: 'd-1',
        course: 2,
        semester: 3,
        discipline: 'Моковая дисциплина №1',
        teacher: 'Тестов Т.Т.',
      },
      {
        id: 'd-2',
        course: 2,
        semester: 4,
        discipline: 'Моковая дисциплина №2',
        teacher: 'Моков М.М.',
      },
    ],
  },

  // === Стипендии ===
  scholarships: {
    // История назначений / снятий
    history: [
      {
        id: 'sch-1',
        type: 'Моковая стипендия №1',
        amount: 1000,
        periodFrom: '01.09.2023',
        periodTo: '31.12.2023',
        reason: 'Моковая причина назначения №1',
        action: 'assigned', // 'assigned' | 'revoked'
      },
      {
        id: 'sch-2',
        type: 'Моковая стипендия №2',
        amount: 2000,
        periodFrom: '01.02.2024',
        periodTo: '30.06.2024',
        reason: 'Моковая причина назначения №2',
        action: 'assigned',
      },
      {
        id: 'sch-3',
        type: 'Моковая стипендия №3',
        amount: 1500,
        periodFrom: '01.09.2023',
        periodTo: '31.01.2024',
        reason: 'Моковая причина снятия',
        action: 'revoked',
      },
    ],
    // Заявка на повышенную стипендию
    application: {
      isOpen: true,
      deadline: '15.11.2025',
      periodLabel: 'Моковый период 2025/2026',
    },
  },

  // === Приказы ===
  orders: [
    {
      id: 'ord-1',
      motivation: 'Моковый приказ №1',
      number: 'MOCK-0001',
      date: '25.08.2021',
      url: '/mock/docs/order-0001.pdf',
    },
    {
      id: 'ord-2',
      motivation: 'Моковый приказ №2',
      number: 'MOCK-0002',
      date: '01.10.2023',
      url: '/mock/docs/order-0002.pdf',
    },
    {
      id: 'ord-3',
      motivation: 'Моковый приказ №3',
      number: 'MOCK-0003',
      date: '01.09.2023',
      url: '/mock/docs/order-0003.pdf',
    },
  ],

  // === Справки ===
  certificates: {
    // Доступные типы справок для заказа
    availableTypes: [
      {
        id: 'cert-study',
        title: 'Моковая справка №1',
        description: 'Моковое описание справки №1',
        formats: ['paper', 'electronic'], // бумажный носитель / электронная с подписью
      },
      {
        id: 'cert-call',
        title: 'Моковая справка №2',
        description: 'Моковое описание справки №2',
        formats: ['paper', 'electronic'],
      },
    ],
    // Ранее оформленные справки
    history: [
      {
        id: 'cert-1',
        type: 'Моковая справка №1',
        format: 'electronic',
        createdAt: '10.09.2024',
        status: 'ready', // 'pending' | 'ready' | 'rejected'
        url: '/mock/docs/cert-0001.pdf',
      },
      {
        id: 'cert-2',
        type: 'Моковая справка №2',
        format: 'paper',
        createdAt: '12.01.2025',
        status: 'pending',
        url: null,
      },
    ],
  },

  // === Платежи ===
  payments: {
    // Суммы к оплате по семестрам
    invoices: [
      {
        id: 'inv-1',
        course: 3,
        semester: 'Моковый семестр №1',
        type: 'Моковый платёж №1',
        amount: 10000,
        paid: 10000,
        dueDate: '15.09.2023',
        status: 'paid', // 'paid' | 'pending' | 'overdue'
      },
      {
        id: 'inv-2',
        course: 3,
        semester: 'Моковый семестр №2',
        type: 'Моковый платёж №1',
        amount: 10000,
        paid: 0,
        dueDate: '15.02.2024',
        status: 'overdue',
      },
      {
        id: 'inv-3',
        course: 3,
        semester: 'Моковый семестр №1',
        type: 'Моковый платёж №2',
        amount: 2000,
        paid: 2000,
        dueDate: '15.09.2023',
        status: 'paid',
      },
    ],
    // Итоговая задолженность
    totalDebt: {
      education: 10000,
      dorm: 0,
    },
  },

  // === Электронный обходной лист ===
  bypassSheet: {
    isActive: true, // false, если ОЛ не активен
    createdAt: '01.06.2024',
    reason: 'Моковая причина обхода',
    items: [
      {
        id: 'bs-1',
        department: 'Моковый отдел №1',
        responsible: 'Заглушкина З.З.',
        status: 'signed', // 'signed' | 'pending' | 'problem'
        comment: 'Моковый комментарий №1',
        signedAt: '03.06.2024',
      },
      {
        id: 'bs-2',
        department: 'Моковый отдел №2',
        responsible: 'Демов Д.Д.',
        status: 'signed',
        comment: 'Моковый комментарий №2',
        signedAt: '04.06.2024',
      },
      {
        id: 'bs-3',
        department: 'Моковый отдел №3',
        responsible: 'Фикстурова Ф.Ф.',
        status: 'problem',
        comment: 'Моковая проблема',
        signedAt: null,
      },
      {
        id: 'bs-4',
        department: 'Моковый отдел №4',
        responsible: 'Сэмплова С.С.',
        status: 'pending',
        comment: 'Моковое ожидание',
        signedAt: null,
      },
      {
        id: 'bs-5',
        department: 'Моковый отдел №5',
        responsible: 'Тестов Т.Т.',
        status: 'signed',
        comment: 'Моковый комментарий №3',
        signedAt: '05.06.2024',
      },
    ],
  },
};
