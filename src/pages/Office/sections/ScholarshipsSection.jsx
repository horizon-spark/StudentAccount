import { Card, Text, Button, Label, Table } from '@gravity-ui/uikit';
import { Plus } from '@gravity-ui/icons';

const columns = [
  { id: 'type', name: 'Тип стипендии', width: 260 },
  {
    id: 'amount',
    name: 'Сумма',
    width: 120,
    template: (item) => `${item.amount.toLocaleString('ru-RU')} ₽`,
  },
  { id: 'periodFrom', name: 'Период с', width: 120 },
  { id: 'periodTo', name: 'по', width: 120 },
  { id: 'reason', name: 'Основание', width: 260 },
  {
    id: 'action',
    name: 'Статус',
    width: 130,
    template: (item) => (
      <Label theme={item.action === 'assigned' ? 'success' : 'danger'} size="s">
        {item.action === 'assigned' ? 'Назначена' : 'Снята'}
      </Label>
    ),
  },
];

export default function ScholarshipsSection({ data }) {
  const { application, history } = data;

  return (
    <Card view="filled" className="office-card">
      <div className="office-card-header">
        <Text variant="header-2">Стипендии</Text>
        {application.isOpen && (
          <Button view="action" size="m">
            <Button.Icon>
              <Plus />
            </Button.Icon>
            Подать заявление на повышенную стипендию
          </Button>
        )}
      </div>

      {application.isOpen && (
        <div className="scholarship-application-banner">
          <Text variant="body-2">
            Приём заявлений открыт до <b>{application.deadline}</b>
          </Text>
          &nbsp;
          <Text variant="caption-1" color="secondary">
            Период: {application.periodLabel}
          </Text>
        </div>
      )}

      <Table data={history} className="office-table" columns={columns} />
    </Card>
  );
}
