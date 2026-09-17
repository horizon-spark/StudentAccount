import { Card, Text, DefinitionList } from '@gravity-ui/uikit';

export default function PersonalDocumentsSection({ data }) {
  return (
    <Card view="filled" className="general-card">
      <Text variant="header-2">Персональные документы</Text>
      <DefinitionList responsive className="general-list">
        <DefinitionList.Item name="Паспорт">
          {data.passportSeries} {data.passportNumber}
        </DefinitionList.Item>
        <DefinitionList.Item name="Кем выдан">{data.passportIssuedBy}</DefinitionList.Item>
        <DefinitionList.Item name="Дата выдачи">{data.passportIssuedDate}</DefinitionList.Item>
        <DefinitionList.Item name="ИНН">{data.inn}</DefinitionList.Item>
        <DefinitionList.Item name="СНИЛС">{data.snils}</DefinitionList.Item>
        <DefinitionList.Item name="Дата и место рождения">
          {data.birthDate}, {data.birthPlace}
        </DefinitionList.Item>
      </DefinitionList>
    </Card>
  );
}
