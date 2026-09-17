import { Card, Text, Table } from '@gravity-ui/uikit';
import { verificationColumn } from './verificationColumn.jsx';

const workExperienceColumns = [
  { id: 'index', name: '№', width: 50, template: (_, i) => i + 1 },
  { id: 'period', name: 'Период', width: 240 },
  { id: 'position', name: 'Должность', width: 220 },
  { id: 'company', name: 'Место работы', width: 220 },
  { id: 'address', name: 'Адрес работы', width: 260 },
  verificationColumn,
];

const professionalAchievementsColumns = [
  { id: 'index', name: '№', width: 50, template: (_, i) => i + 1 },
  { id: 'title', name: 'Название', width: 400 },
  { id: 'date', name: 'Дата', width: 130 },
  verificationColumn,
];

export default function ProfessionalSection({ data }) {
  return (
    <Card view="filled" className="portfolio-card">
      <Text variant="header-2">Профессиональная деятельность</Text>

      <Text variant="subheader-2" className="portfolio-subtitle">
        Опыт работы
      </Text>
      <Table data={data.workExperience} columns={workExperienceColumns} />

      <Text variant="subheader-2" className="portfolio-subtitle">
        Профессиональные достижения
      </Text>
      <Table data={data.professionalAchievements} columns={professionalAchievementsColumns} />

      <Text variant="caption-2" color="secondary" className="portfolio-note">
        Раздел не используется для назначения ПГАС, но позволяет собирать данные о работающих
        студентах и их профессиональных успехах.
      </Text>
    </Card>
  );
}
