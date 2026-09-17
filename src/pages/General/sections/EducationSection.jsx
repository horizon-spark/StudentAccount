import { Card, Text, DefinitionList } from '@gravity-ui/uikit';

export default function EducationSection({ data }) {
  return (
    <Card view="filled" className="general-card">
      <Text variant="header-2">Образование</Text>
      <DefinitionList responsive className="general-list">
        <DefinitionList.Item name="Тип образования">{data.educationType}</DefinitionList.Item>
        <DefinitionList.Item name="Тип документа">{data.documentType}</DefinitionList.Item>
        <DefinitionList.Item name="Учебное заведение">
          {data.educationInstitution}
        </DefinitionList.Item>
        <DefinitionList.Item name="Год окончания">{data.educationEndYear}</DefinitionList.Item>
      </DefinitionList>
    </Card>
  );
}
