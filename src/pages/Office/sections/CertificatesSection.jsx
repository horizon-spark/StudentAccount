import { Card, Text, Button, Label, Table } from '@gravity-ui/uikit';
import { Plus, FileArrowDown } from '@gravity-ui/icons';
import { certStatuses } from './statusMaps.js';

const columns = [
  { id: 'type', name: 'Тип справки', width: 260 },
  {
    id: 'format',
    name: 'Формат',
    width: 160,
    template: (item) => (item.format === 'electronic' ? 'Электронная' : 'Бумажная'),
  },
  { id: 'createdAt', name: 'Дата заявки', width: 140 },
  {
    id: 'status',
    name: 'Статус',
    width: 140,
    template: (item) => (
      <Label theme={certStatuses[item.status].theme} size="s">
        {certStatuses[item.status].text}
      </Label>
    ),
  },
  {
    id: 'download',
    name: 'Скачать',
    width: 130,
    template: (item) =>
      item.url ? (
        <a href={item.url} className="office-link" download>
          <FileArrowDown size={16} /> Скачать
        </a>
      ) : (
        <Text variant="caption-1" color="secondary">
          —
        </Text>
      ),
  },
];

export default function CertificatesSection({ data }) {
  const { availableTypes, history } = data;

  return (
    <Card view="filled" className="office-card">
      <div className="office-card-header">
        <Text variant="header-2">Справки</Text>
        <Button view="action" size="m">
          <Button.Icon>
            <Plus />
          </Button.Icon>
          Заказать справку
        </Button>
      </div>

      <div className="cert-types">
        {availableTypes.map((t) => (
          <div key={t.id} className="cert-type-card">
            <Text variant="subheader-2">{t.title}</Text>
            <Text variant="caption-1" color="secondary">
              {t.description}
            </Text>
          </div>
        ))}
      </div>

      <Text variant="subheader-2" className="office-subtitle">
        История заявок
      </Text>
      <Table data={history} className="office-table" columns={columns} />
    </Card>
  );
}
