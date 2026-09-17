import { verificationColumn } from './verificationColumn.jsx';

export const achievementColumns = [
  { id: 'index', name: '№', width: 50, template: (_, i) => i + 1 },
  { id: 'title', name: 'Наименование работы / мероприятия', width: 280 },
  { id: 'rank', name: 'Ранг', width: 140 },
  { id: 'workType', name: 'Тип работы', width: 200 },
  { id: 'location', name: 'Место проведения', width: 200 },
  { id: 'date', name: 'Дата', width: 110 },
  { id: 'supervisor', name: 'ФИО руководителя', width: 180 },
  verificationColumn,
];
