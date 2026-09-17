import { Card, Text, Label } from '@gravity-ui/uikit';

export default function StudyDocumentsSection({ documents }) {
  return (
    <Card view="filled" className="general-card">
      <Text variant="header-2">Документы по обучению в МАУ</Text>

      <div className="study-docs">
        {documents.map((doc) => (
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
  );
}
