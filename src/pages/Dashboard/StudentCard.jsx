import { Avatar, Card, Text } from '@gravity-ui/uikit';
import './StudentCard.css';

export default function StudentCard({ student }) {
  const fullName = [student.lastName, student.firstName, student.middleName]
    .filter(Boolean)
    .join(' ');

  return (
    <Card className="student-card" view="filled">
      <div className="student-card-avatar">
        <Avatar
          imgUrl={student.photoUrl}
          size="xl"
          fallbackText={`${student.lastName?.[0] ?? ''}${student.firstName?.[0] ?? ''}`}
        />
      </div>

      <Text variant="header-2" className="student-card-name">
        {fullName}
      </Text>

      <Text variant="body-2" color="secondary" className="student-card-meta">
        {student.group} · {student.faculty}
      </Text>

      <div className="student-card-footer">
        <Text variant="subheader-2">
          {student.greeting}, {student.firstName}!
        </Text>
        &nbsp;
        <Text variant="body-2" color="secondary" className="student-card-lessons">
          Сегодня у вас {student.todayLessonsCount} пары.
        </Text>
      </div>
    </Card>
  );
}
