import { Card, Text, Label, Table, Progress } from '@gravity-ui/uikit';
import { bypassStatuses } from './statusMaps.js';

const columns = [
  { id: 'department', name: 'Подразделение', width: 200 },
  { id: 'responsible', name: 'Ответственный', width: 200 },
  {
    id: 'status',
    name: 'Статус',
    width: 160,
    template: (item) => (
      <Label theme={bypassStatuses[item.status].theme} size="s">
        {bypassStatuses[item.status].text}
      </Label>
    ),
  },
  { id: 'comment', name: 'Комментарий', width: 320 },
  { id: 'signedAt', name: 'Подписано', width: 130 },
];

function MetaItem({ label, value }) {
  return (
    <div className="bypass-meta">
      <Text variant="caption-2" color="secondary" className="bypass-meta-label">
        {label}
      </Text>
      <Text variant="body-2" className="bypass-meta-value" title={value}>
        {value}
      </Text>
    </div>
  );
}

export default function BypassSheetSection({ data }) {
  if (!data.isActive) {
    return (
      <Card view="filled" className="office-card">
        <Text variant="header-2">Электронный обходной лист</Text>
        <Text variant="body-2" color="secondary" className="office-empty">
          Активных обходных листов нет
        </Text>
      </Card>
    );
  }

  const signedCount = data.items.filter((i) => i.status === 'signed').length;
  const total = data.items.length;

  return (
    <Card view="filled" className="office-card">
      <Text variant="header-2">Электронный обходной лист</Text>

      <div className="bypass-header">
        <MetaItem label="Создан" value={data.createdAt} />
        <MetaItem label="Основание" value={data.reason} />

        <div className="bypass-progress">
          <Text variant="caption-2" color="secondary">
            Прогресс: {signedCount} из {total}
          </Text>
          <Progress value={(signedCount / total) * 100} theme="success" size="s" />
        </div>
      </div>

      <Table data={data.items} className="office-table" columns={columns} />
    </Card>
  );
}
