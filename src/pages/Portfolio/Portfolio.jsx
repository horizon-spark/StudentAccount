import { usePortfolioStore } from '@/store';
import { useAsyncData } from '@/store/lib/useAsyncData.js';
import { AsyncBoundary } from '@/components/State';

import AchievementSection from './sections/AchievementSection.jsx';
import ProfessionalSection from './sections/ProfessionalSection.jsx';

import './Portfolio.css';

export default function Portfolio() {
  const { data: p, status, error, fetch } = useAsyncData(usePortfolioStore);

  return (
    <AsyncBoundary status={status} error={error} onRetry={fetch}>
      {p && <PortfolioContent p={p} />}
    </AsyncBoundary>
  );
}

function PortfolioContent({ p }) {
  // Единый конфиг: title + key в p + обработчик «Добавить».
  // Так проще поддерживать: одна точка правды для пяти секций.
  const achievementSections = [
    { key: 'academic', title: 'Достижения в учебной деятельности' },
    { key: 'research', title: 'Достижения в научно-исследовательской деятельности' },
    { key: 'sport', title: 'Достижения в спортивной деятельности' },
    { key: 'cultural', title: 'Достижения в культурно-творческой деятельности' },
    { key: 'social', title: 'Достижения в общественной деятельности' },
  ];

  return (
    <div className="portfolio-page">
      {achievementSections.map(({ key, title }) => (
        <AchievementSection
          key={key}
          title={title}
          items={p[key]}
          onAdd={() => console.log(`add ${key}`)}
        />
      ))}

      <ProfessionalSection data={p.professional} />
    </div>
  );
}
