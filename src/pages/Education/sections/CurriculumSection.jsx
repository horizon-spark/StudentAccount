import { Card, Text } from '@gravity-ui/uikit';
import { ArrowDownToLine } from '@gravity-ui/icons';

export default function CurriculumSection({ data }) {
  return (
    <Card view="filled" className="edu-card">
      <Text variant="header-2">Учебный план</Text>

      <div className="curriculum-links">
        <a href={data.fullPlanUrl} className="doc-link" download>
          <ArrowDownToLine size={16} /> Полный учебный план (PDF)
        </a>

        <div className="curriculum-year-list">
          {data.byYear.map((y) => (
            <a key={y.id} href={y.url} className="doc-link" download>
              <ArrowDownToLine size={16} /> Учебный план {y.year}
            </a>
          ))}
        </div>

        <div className="curriculum-additional">
          <a href={data.kugUrl} className="doc-link" download>
            <ArrowDownToLine size={16} /> КУГ (Календарный учебный график)
          </a>
          <a href={data.workProgramsUrl} className="doc-link" download>
            <ArrowDownToLine size={16} /> Рабочие программы дисциплин и практик
          </a>
        </div>
      </div>
    </Card>
  );
}
