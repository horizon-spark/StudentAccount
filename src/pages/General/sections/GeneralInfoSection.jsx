import { Card, Text, DefinitionList, Label } from '@gravity-ui/uikit';

const statusMap = {
  student: { theme: 'success', text: 'Студент' },
  academic_leave: { theme: 'warning', text: 'Академический отпуск' },
};

export default function GeneralInfoSection({ data }) {
  const status = statusMap[data.status] ?? statusMap.student;

  return (
    <Card view="filled" className="general-card">
      <Text variant="header-2">Общая информация</Text>
      <DefinitionList responsive className="general-list">
        <DefinitionList.Item name="ФИО">{data.fullName}</DefinitionList.Item>
        <DefinitionList.Item name="Пол">{data.gender}</DefinitionList.Item>
        <DefinitionList.Item name="Дата рождения">{data.birthDate}</DefinitionList.Item>
        <DefinitionList.Item name="Отношение к ВС">{data.militaryStatus}</DefinitionList.Item>
        <DefinitionList.Item name="Номер зачётной книжки">
          {data.gradeBookNumber}
        </DefinitionList.Item>
        <DefinitionList.Item name="Группа">{data.group}</DefinitionList.Item>
        <DefinitionList.Item name="Статус">
          <Label theme={status.theme} size="s">
            {status.text}
          </Label>
        </DefinitionList.Item>
        <DefinitionList.Item name="Учебное подразделение">
          {data.academicUnit} · {data.institute} · {data.faculty}
        </DefinitionList.Item>
        <DefinitionList.Item name="Направление подготовки">{data.direction}</DefinitionList.Item>
        <DefinitionList.Item name="Профиль / направленность">{data.profile}</DefinitionList.Item>
        <DefinitionList.Item name="Форма обучения">{data.educationForm}</DefinitionList.Item>
        <DefinitionList.Item name="Год поступления">{data.enrollmentYear}</DefinitionList.Item>
        <DefinitionList.Item name="Адрес проживания (основной)">
          {data.addressMain}
        </DefinitionList.Item>
        <DefinitionList.Item name="Адрес проживания (общежитие)">
          {data.addressDorm ?? '—'}
        </DefinitionList.Item>
      </DefinitionList>
    </Card>
  );
}
