import { Card, Text, Button, Label, Table } from '@gravity-ui/uikit';
import { debtStatuses } from './statusMaps.js';

function SummaryItem({ label, amount }) {
  const isDebt = amount > 0;
  return (
    <div className="payment-summary-item">
      <Text variant="caption-2" color="secondary">
        {label}
      </Text>
      <Text variant="header-2" className={isDebt ? 'debt-positive' : ''}>
        {amount.toLocaleString('ru-RU')} ₽
      </Text>
    </div>
  );
}

const columns = [
  { id: 'course', name: 'Курс', width: 70 },
  { id: 'semester', name: 'Семестр', width: 180 },
  { id: 'type', name: 'Тип', width: 130 },
  {
    id: 'amount',
    name: 'Сумма',
    width: 120,
    template: (item) => `${item.amount.toLocaleString('ru-RU')} ₽`,
  },
  {
    id: 'paid',
    name: 'Оплачено',
    width: 120,
    template: (item) => `${item.paid.toLocaleString('ru-RU')} ₽`,
  },
  { id: 'dueDate', name: 'Оплатить до', width: 130 },
  {
    id: 'status',
    name: 'Статус',
    width: 160,
    template: (item) => (
      <Label theme={debtStatuses[item.status].theme} size="s">
        {debtStatuses[item.status].text}
      </Label>
    ),
  },
  {
    id: 'actions',
    name: 'Действия',
    width: 180,
    template: (item) =>
      item.status === 'paid' ? (
        <a href="#" className="office-link">
          Квитанция
        </a>
      ) : (
        <Button view="outlined" size="s">
          Оплатить онлайн
        </Button>
      ),
  },
];

export default function PaymentsSection({ data }) {
  const { totalDebt, invoices } = data;

  return (
    <Card view="filled" className="office-card">
      <Text variant="header-2">Платежи</Text>

      <div className="payments-summary">
        <SummaryItem label="Задолженность по обучению" amount={totalDebt.education} />
        <SummaryItem label="Задолженность по общежитию" amount={totalDebt.dorm} />
      </div>

      <Table data={invoices} className="office-table" columns={columns} />
    </Card>
  );
}
