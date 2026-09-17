import { Card, Text, Table } from '@gravity-ui/uikit';

const columns = [
  { id: 'index', name: '№', width: 50, template: (_, i) => i + 1 },
  { id: 'course', name: 'Курс', width: 80 },
  { id: 'semester', name: 'Семестр', width: 100 },
  { id: 'discipline', name: 'Дисциплина', width: 300 },
  { id: 'teacher', name: 'ФИО преподавателя', width: 220 },
];

export default function AcademicDebtsSection({ data }) {
  return (
    <Card view="filled" className="office-card">
      <Text variant="header-2">Академическая задолженность</Text>

      {!data.hasDebts ? (
        <Text variant="body-2" color="secondary" className="office-empty">
          Академических задолженностей нет
        </Text>
      ) : (
        <Table data={data.items} className="office-table" columns={columns} />
      )}
    </Card>
  );
}
