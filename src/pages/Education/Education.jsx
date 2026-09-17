import { useEducationStore } from '@/store';
import { useAsyncData } from '@/store/lib/useAsyncData.js';
import { AsyncBoundary } from '@/components/State';

import StudentCardSection from './sections/StudentCardSection.jsx';
import GradeBookSection from './sections/GradeBookSection.jsx';
import CurriculumSection from './sections/CurriculumSection.jsx';
import EiosCoursesSection from './sections/EiosCoursesSection.jsx';
import TeacherScheduleSection from './sections/TeacherScheduleSection.jsx';

import './Education.css';

export default function Education() {
  const { data: e, status, error, fetch } = useAsyncData(useEducationStore);

  return (
    <AsyncBoundary status={status} error={error} onRetry={fetch}>
      {e && <EducationContent e={e} />}
    </AsyncBoundary>
  );
}

function EducationContent({ e }) {
  return (
    <div className="education-page">
      <StudentCardSection data={e.studentCard} />
      <GradeBookSection data={e.gradeBook} />
      <CurriculumSection data={e.curriculum} />
      <EiosCoursesSection courses={e.eiosCourses} lkUrl={e.eiosLkUrl} />
      <TeacherScheduleSection url={e.teacherScheduleUrl} />
    </div>
  );
}
