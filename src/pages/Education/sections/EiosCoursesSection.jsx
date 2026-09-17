import { Card, Text, Table } from '@gravity-ui/uikit';
import { ArrowRightFromSquare } from '@gravity-ui/icons';

const columns = [
  { id: 'index', name: '№', width: 60, template: (_, i) => i + 1 },
  { id: 'name', name: 'Название курса', width: 320 },
  {
    id: 'details',
    name: 'Подробнее',
    width: 160,
    template: (item) => (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="course-link">
        Перейти в Moodle
      </a>
    ),
  },
];

export default function EiosCoursesSection({ courses, lkUrl }) {
  return (
    <Card view="filled" className="edu-card">
      <div className="edu-card-header">
        <Text variant="header-2">Курсы в ЭИОС МАУ</Text>
        <a href={lkUrl} target="_blank" rel="noopener noreferrer" className="eios-lk-link">
          Личный кабинет ЭИОС <ArrowRightFromSquare size={14} />
        </a>
      </div>

      <Table data={courses} columns={columns} />
    </Card>
  );
}
