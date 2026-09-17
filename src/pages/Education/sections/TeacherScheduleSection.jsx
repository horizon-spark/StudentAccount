import { Card, Text } from '@gravity-ui/uikit';
import { ArrowDownToLine } from '@gravity-ui/icons';

export default function TeacherScheduleSection({ url }) {
  return (
    <Card view="filled" className="edu-card">
      <Text variant="header-2">Графики индивидуальной работы преподавателей</Text>
      <Text variant="body-2" color="secondary" className="teacher-schedule-note">
        Графики по всем институтам, факультетам и академиям доступны по ссылке.
      </Text>

      <div className="teacher-schedule-download">
        <a href={url} className="doc-link" download>
          <ArrowDownToLine size={16} /> Скачать графики (PDF)
        </a>
      </div>
    </Card>
  );
}
