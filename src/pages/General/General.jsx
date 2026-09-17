import { Card, Text, DefinitionList, Label } from '@gravity-ui/uikit';
import { usePersonalDataStore } from '@/store';
import { useAsyncData } from '@/store/lib/useAsyncData.js';
import { AsyncBoundary } from '@/components/State';
import './General.css';

const statusMap = {
  student: { theme: 'success', text: 'Студент' },
  academic_leave: { theme: 'warning', text: 'Академический отпуск' },
};

export default function General() {
  const { data: g, status, error, fetch } = useAsyncData(usePersonalDataStore);

  return (
    <AsyncBoundary status={status} error={error} onRetry={fetch}>
      {g && <GeneralContent g={g} />}
    </AsyncBoundary>
  );
}

function GeneralContent({ g }) {
  const status = statusMap[g.status] ?? statusMap.student;

  return (
    <div className="general-page">
      {/* === ОБЩАЯ ИНФОРМАЦИЯ === */}
      <Card view="filled" className="general-card">
        <Text variant="header-2">Общая информация</Text>
        <DefinitionList responsive className="general-list">
          <DefinitionList.Item name="ФИО">{g.fullName}</DefinitionList.Item>
          <DefinitionList.Item name="Пол">{g.gender}</DefinitionList.Item>
          <DefinitionList.Item name="Дата рождения">{g.birthDate}</DefinitionList.Item>
          <DefinitionList.Item name="Отношение к ВС">{g.militaryStatus}</DefinitionList.Item>
          <DefinitionList.Item name="Номер зачётной книжки">
            {g.gradeBookNumber}
          </DefinitionList.Item>
          <DefinitionList.Item name="Группа">{g.group}</DefinitionList.Item>
          <DefinitionList.Item name="Статус">
            <Label theme={status.theme} size="s">
              {status.text}
            </Label>
          </DefinitionList.Item>
          <DefinitionList.Item name="Учебное подразделение">
            {g.academicUnit} · {g.institute} · {g.faculty}
          </DefinitionList.Item>
          <DefinitionList.Item name="Направление подготовки">{g.direction}</DefinitionList.Item>
          <DefinitionList.Item name="Профиль / направленность">{g.profile}</DefinitionList.Item>
          <DefinitionList.Item name="Форма обучения">{g.educationForm}</DefinitionList.Item>
          <DefinitionList.Item name="Год поступления">{g.enrollmentYear}</DefinitionList.Item>
          <DefinitionList.Item name="Адрес проживания (основной)">
            {g.addressMain}
          </DefinitionList.Item>
          <DefinitionList.Item name="Адрес проживания (общежитие)">
            {g.addressDorm ?? '—'}
          </DefinitionList.Item>
        </DefinitionList>
      </Card>

      {/* === ОБРАЗОВАНИЕ === */}
      <Card view="filled" className="general-card">
        <Text variant="header-2">Образование</Text>
        <DefinitionList responsive className="general-list">
          <DefinitionList.Item name="Тип образования">{g.educationType}</DefinitionList.Item>
          <DefinitionList.Item name="Тип документа">{g.documentType}</DefinitionList.Item>
          <DefinitionList.Item name="Учебное заведение">
            {g.educationInstitution}
          </DefinitionList.Item>
          <DefinitionList.Item name="Год окончания">{g.educationEndYear}</DefinitionList.Item>
        </DefinitionList>
      </Card>

      {/* === ПЕРСОНАЛЬНЫЕ ДОКУМЕНТЫ === */}
      <Card view="filled" className="general-card">
        <Text variant="header-2">Персональные документы</Text>
        <DefinitionList responsive className="general-list">
          <DefinitionList.Item name="Паспорт">
            {g.passportSeries} {g.passportNumber}
          </DefinitionList.Item>
          <DefinitionList.Item name="Кем выдан">{g.passportIssuedBy}</DefinitionList.Item>
          <DefinitionList.Item name="Дата выдачи">{g.passportIssuedDate}</DefinitionList.Item>
          <DefinitionList.Item name="ИНН">{g.inn}</DefinitionList.Item>
          <DefinitionList.Item name="СНИЛС">{g.snils}</DefinitionList.Item>
          <DefinitionList.Item name="Дата и место рождения">
            {g.birthDate}, {g.birthPlace}
          </DefinitionList.Item>
        </DefinitionList>
      </Card>

      {/* === ДОКУМЕНТЫ ПО ОБУЧЕНИЮ === */}
      <Card view="filled" className="general-card">
        <Text variant="header-2">Документы по обучению в МАУ</Text>
        <div className="study-docs">
          {g.studyDocuments.map((doc) => (
            <div key={doc.id} className="study-doc-row">
              <Text variant="body-2">{doc.title}</Text>
              <div className="study-doc-meta">
                <Label theme={doc.status === 'Не заключён' ? 'warning' : 'success'} size="xs">
                  {doc.status}
                </Label>
                {doc.date && (
                  <Text variant="caption-1" color="secondary">
                    {doc.date}
                  </Text>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
