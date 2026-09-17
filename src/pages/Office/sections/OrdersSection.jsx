import { Card, Text, Table } from '@gravity-ui/uikit';

const columns = [
  { id: 'index', name: '№', width: 50, template: (_, i) => i + 1 },
  { id: 'motivation', name: 'Мотивировка', width: 400 },
  { id: 'number', name: 'Номер', width: 140 },
  { id: 'date', name: 'Дата', width: 130 },
  {
    id: 'view',
    name: 'Просмотреть',
    width: 150,
    template: (item) => (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="office-link">
        Открыть PDF
      </a>
    ),
  },
];

export default function OrdersSection({ orders }) {
  return (
    <Card view="filled" className="office-card">
      <Text variant="header-2">Приказы</Text>
      <Table data={orders} className="office-table" columns={columns} />
    </Card>
  );
}
