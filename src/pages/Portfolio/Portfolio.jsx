import { Card, Text, Button, Label, Table } from '@gravity-ui/uikit';
import { Plus } from '@gravity-ui/icons';
import { usePortfolioStore } from '@/store';
import { useAsyncData } from '@/store/lib/useAsyncData.js';
import { AsyncBoundary } from '@/components/State';
import './Portfolio.css';

// Универсальная таблица для 5 однотипных категорий
function AchievementTable({ items, onAdd }) {
  return (
    <>
      <div className="portfolio-table-header">
        <Button view="action" size="m" onClick={onAdd}>
          <Button.Icon>
            <Plus />
          </Button.Icon>
          Добавить новое достижение
        </Button>
      </div>
      <Table
        data={items}
        columns={[
          { id: 'index', name: '№', width: 50, template: (_, i) => i + 1 },
          { id: 'title', name: 'Наименование работы / мероприятия', width: 280 },
          { id: 'rank', name: 'Ранг', width: 140 },
          { id: 'workType', name: 'Тип работы', width: 200 },
          { id: 'location', name: 'Место проведения', width: 200 },
          { id: 'date', name: 'Дата', width: 110 },
          { id: 'supervisor', name: 'ФИО руководителя', width: 180 },
          {
            id: 'verified',
            name: 'Проверено',
            width: 120,
            template: (item) => (
              <Label theme={item.verified ? 'success' : 'warning'} size="s">
                {item.verified ? 'Проверено' : 'На проверке'}
              </Label>
            ),
          },
        ]}
      />
    </>
  );
}

export default function Portfolio() {
  const { data: p, status, error, fetch } = useAsyncData(usePortfolioStore);

  return (
    <AsyncBoundary status={status} error={error} onRetry={fetch}>
      {p && <PortfolioContent p={p} />}
    </AsyncBoundary>
  );
}

function PortfolioContent({ p }) {
  return (
    <div className="portfolio-page">
      {/* === УЧЕБНАЯ ДЕЯТЕЛЬНОСТЬ === */}
      <Card view="filled" className="portfolio-card">
        <Text variant="header-2">Достижения в учебной деятельности</Text>
        <AchievementTable items={p.academic} onAdd={() => console.log('add academic')} />
      </Card>

      {/* === НАУЧНО-ИССЛЕДОВАТЕЛЬСКАЯ ДЕЯТЕЛЬНОСТЬ === */}
      <Card view="filled" className="portfolio-card">
        <Text variant="header-2">Достижения в научно-исследовательской деятельности</Text>
        <AchievementTable items={p.research} onAdd={() => console.log('add research')} />
      </Card>

      {/* === СПОРТИВНАЯ ДЕЯТЕЛЬНОСТЬ === */}
      <Card view="filled" className="portfolio-card">
        <Text variant="header-2">Достижения в спортивной деятельности</Text>
        <AchievementTable items={p.sport} onAdd={() => console.log('add sport')} />
      </Card>

      {/* === КУЛЬТУРНО-ТВОРЧЕСКАЯ ДЕЯТЕЛЬНОСТЬ === */}
      <Card view="filled" className="portfolio-card">
        <Text variant="header-2">Достижения в культурно-творческой деятельности</Text>
        <AchievementTable items={p.cultural} onAdd={() => console.log('add cultural')} />
      </Card>

      {/* === ОБЩЕСТВЕННАЯ ДЕЯТЕЛЬНОСТЬ === */}
      <Card view="filled" className="portfolio-card">
        <Text variant="header-2">Достижения в общественной деятельности</Text>
        <AchievementTable items={p.social} onAdd={() => console.log('add social')} />
      </Card>

      {/* === ПРОФЕССИОНАЛЬНАЯ ДЕЯТЕЛЬНОСТЬ === */}
      <Card view="filled" className="portfolio-card">
        <Text variant="header-2">Профессиональная деятельность</Text>

        {/* Опыт работы */}
        <Text variant="subheader-2" className="portfolio-subtitle">
          Опыт работы
        </Text>
        <Table
          data={p.professional.workExperience}
          columns={[
            { id: 'index', name: '№', width: 50, template: (_, i) => i + 1 },
            { id: 'period', name: 'Период', width: 240 },
            { id: 'position', name: 'Должность', width: 220 },
            { id: 'company', name: 'Место работы', width: 220 },
            { id: 'address', name: 'Адрес работы', width: 260 },
            {
              id: 'verified',
              name: 'Проверено',
              width: 120,
              template: (item) => (
                <Label theme={item.verified ? 'success' : 'warning'} size="s">
                  {item.verified ? 'Проверено' : 'На проверке'}
                </Label>
              ),
            },
          ]}
        />

        {/* Профессиональные достижения */}
        <Text variant="subheader-2" className="portfolio-subtitle">
          Профессиональные достижения
        </Text>
        <Table
          data={p.professional.professionalAchievements}
          columns={[
            { id: 'index', name: '№', width: 50, template: (_, i) => i + 1 },
            { id: 'title', name: 'Название', width: 400 },
            { id: 'date', name: 'Дата', width: 130 },
            {
              id: 'verified',
              name: 'Проверено',
              width: 120,
              template: (item) => (
                <Label theme={item.verified ? 'success' : 'warning'} size="s">
                  {item.verified ? 'Проверено' : 'На проверке'}
                </Label>
              ),
            },
          ]}
        />

        <Text variant="caption-2" color="secondary" className="portfolio-note">
          Раздел не используется для назначения ПГАС, но позволяет собирать данные о работающих
          студентах и их профессиональных успехах.
        </Text>
      </Card>
    </div>
  );
}
