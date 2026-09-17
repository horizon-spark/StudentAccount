import { Card, Text, Button, Table } from '@gravity-ui/uikit';
import { Plus } from '@gravity-ui/icons';
import { achievementColumns } from './achievementColumns.js';

export default function AchievementSection({ title, items, onAdd }) {
  return (
    <Card view="filled" className="portfolio-card">
      <Text variant="header-2">{title}</Text>

      <div className="portfolio-table-header">
        <Button view="action" size="m" onClick={onAdd}>
          <Button.Icon>
            <Plus />
          </Button.Icon>
          Добавить новое достижение
        </Button>
      </div>

      <Table data={items} columns={achievementColumns} />
    </Card>
  );
}
