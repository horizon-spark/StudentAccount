import { usePersonalDataStore } from '@/store';
import { useAsyncData } from '@/store/lib/useAsyncData.js';
import { AsyncBoundary } from '@/components/State';

import GeneralInfoSection from './sections/GeneralInfoSection.jsx';
import EducationSection from './sections/EducationSection.jsx';
import PersonalDocumentsSection from './sections/PersonalDocumentsSection.jsx';
import StudyDocumentsSection from './sections/StudyDocumentsSection.jsx';

import './General.css';

export default function General() {
  const { data: g, status, error, fetch } = useAsyncData(usePersonalDataStore);

  return (
    <AsyncBoundary status={status} error={error} onRetry={fetch}>
      {g && <GeneralContent g={g} />}
    </AsyncBoundary>
  );
}

function GeneralContent({ g }) {
  return (
    <div className="general-page">
      <GeneralInfoSection data={g} />
      <EducationSection data={g} />
      <PersonalDocumentsSection data={g} />
      <StudyDocumentsSection documents={g.studyDocuments} />
    </div>
  );
}
