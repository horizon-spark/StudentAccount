import { useState } from 'react';
import { Card, Text, Button, Progress, Table } from '@gravity-ui/uikit';
import { ArrowDownToLine } from '@gravity-ui/icons';

const columns = [
  { id: 'date', name: 'Дата', width: 110 },
  { id: 'discipline', name: 'Дисциплина', width: 220 },
  { id: 'hours', name: 'Часы / ЗЕТ', width: 110 },
  { id: 'attestation', name: 'Аттестация', width: 130 },
  { id: 'grade', name: 'Оценка', width: 100 },
  { id: 'teacher', name: 'Преподаватель', width: 180 },
];

export default function GradeBookSection({ data }) {
  const [exportRange, setExportRange] = useState('all');

  return (
    <Card view="filled" className="edu-card">
      <div className="edu-card-header">
        <Text variant="header-2">Электронная зачётная книжка</Text>

        <div className="grade-export">
          <select
            className="grade-export-select"
            value={exportRange}
            onChange={(ev) => setExportRange(ev.target.value)}
          >
            <option value="all">За все семестры</option>
            {data.semesters.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <Button view="action" size="m">
            <Button.Icon>
              <ArrowDownToLine />
            </Button.Icon>
            Выписка из зачётной книжки
          </Button>
        </div>
      </div>

      <div className="average-score">
        <Text variant="body-2" color="secondary">
          Средний балл
        </Text>
        <Text variant="header-1" className="average-score-value">
          {data.averageScore}
        </Text>
        <div className="average-progress">
          <Progress value={data.averageScore * 20} theme="success" size="s" />
        </div>
      </div>

      {data.semesters.map((sem) => (
        <div key={sem.id} className="semester-block">
          <Text variant="subheader-2" className="semester-title">
            {sem.name}
          </Text>
          <Table data={sem.records} columns={columns} />
        </div>
      ))}
    </Card>
  );
}
