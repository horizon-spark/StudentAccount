import { Text, Icon } from '@gravity-ui/uikit';
import {
  ArrowUpRightFromSquare,
  Persons,
  GraduationCap,
  Wrench,
  Calculator,
  Briefcase,
  Megaphone,
  Comment,
} from '@gravity-ui/icons';
import { useContactsStore } from '@/store';
import { useAsyncData } from '@/store/lib/useAsyncData.js';
import { AsyncBoundary } from '@/components/State';

import SectionCard from './sections/SectionCard.jsx';
import PersonsGrid from './sections/PersonsGrid.jsx';
import PersonCard from './sections/PersonCard.jsx';
import SimpleList from './sections/SimpleList.jsx';
import StudentOfficeTable from './sections/StudentOfficeTable.jsx';
import LinksRow from './sections/LinksRow.jsx';

import './Contacts.css';

// --- Секции ---

function AcademicUnitSection({ unit }) {
  return (
    <SectionCard icon={GraduationCap} title={unit.fullName}>
      <Text variant="subheader-2" className="contacts-subtitle">
        Руководство
      </Text>
      <PersonsGrid persons={[unit.head, ...unit.deputies]} />

      <Text variant="subheader-2" className="contacts-subtitle">
        Работа со студентами
      </Text>
      <PersonsGrid persons={unit.studentSpecialists} />
    </SectionCard>
  );
}

function CuratorSection({ curator }) {
  return (
    <SectionCard icon={Persons} title="Куратор академической группы">
      <div className="persons-grid">
        <PersonCard person={curator} showDepartment />
      </div>
    </SectionCard>
  );
}

function TechSupportSection({ data }) {
  return (
    <SectionCard icon={Wrench} title={data.title} description={data.description}>
      <LinksRow links={data.links} />
      <SimpleList items={data.contacts} />
    </SectionCard>
  );
}

function AccountingSection({ data }) {
  return (
    <SectionCard icon={Calculator} title={data.title} description={data.description}>
      <PersonsGrid persons={data.specialists} />
    </SectionCard>
  );
}

function StudentOfficeSection({ data }) {
  return (
    <SectionCard
      icon={Briefcase}
      title={data.title}
      description={data.description}
      action={
        <a
          href={data.pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link-row"
        >
          Все контакты офиса <Icon data={ArrowUpRightFromSquare} size={12} />
        </a>
      }
    >
      <StudentOfficeTable specialists={data.specialists} />
    </SectionCard>
  );
}

function YouthPolicySection({ data }) {
  return (
    <SectionCard
      icon={Megaphone}
      title={data.title}
      description={data.description}
      action={
        <a
          href={data.pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link-row"
        >
          Страница управления <Icon data={ArrowUpRightFromSquare} size={12} />
        </a>
      }
    >
      <SimpleList
        items={data.departments.map((d) => ({
          id: d.id,
          label: d.name,
          value: d.phone,
        }))}
      />
    </SectionCard>
  );
}

function OtherContactsSection({ data }) {
  return (
    <SectionCard icon={Comment} title={data.title}>
      <SimpleList items={data.items} row />
    </SectionCard>
  );
}

// --- Страница ---

export default function Contacts() {
  const { data: c, status, error, fetch } = useAsyncData(useContactsStore);

  return (
    <AsyncBoundary status={status} error={error} onRetry={fetch}>
      {c && <ContactsContent c={c} />}
    </AsyncBoundary>
  );
}

function ContactsContent({ c }) {
  return (
    <div className="contacts-page">
      <AcademicUnitSection unit={c.academicUnit} />
      <CuratorSection curator={c.curator} />
      <TechSupportSection data={c.techSupport} />
      <AccountingSection data={c.accounting} />
      <StudentOfficeSection data={c.studentOffice} />
      <YouthPolicySection data={c.youthPolicy} />
      <OtherContactsSection data={c.other} />
    </div>
  );
}
