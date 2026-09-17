import { Card, Text, Label } from '@gravity-ui/uikit';
import { QRCodeSVG } from 'qrcode.react';

export default function StudentCardSection({ data }) {
  return (
    <Card view="filled" className="edu-card">
      <Text variant="header-2">Электронный студенческий билет</Text>

      <div className="student-card-layout">
        <div className="student-card-qr">
          <QRCodeSVG value={data.qrData} size={160} />
        </div>

        <div className="student-card-info">
          <Text variant="subheader-2">{data.fullName}</Text>
          <Text variant="body-2" color="secondary" className="student-card-department">
            {data.department}
          </Text>

          <div className="student-card-meta">
            <Text variant="caption-2" color="secondary">
              № студенческого
            </Text>
            <Text variant="body-1">{data.studentId}</Text>
          </div>

          <div className="student-card-meta">
            <Text variant="caption-2" color="secondary">
              Форма обучения
            </Text>
            <Text variant="body-1">{data.educationForm}</Text>
          </div>

          <div className="student-card-meta">
            <Text variant="caption-2" color="secondary">
              Приказ о зачислении
            </Text>
            <Text variant="body-1">{data.enrollmentOrder}</Text>
          </div>

          <div className="student-card-meta">
            <Text variant="caption-2" color="secondary">
              Срок действия
            </Text>
            <Label theme="success" size="s">
              {data.validUntil}
            </Label>
          </div>
        </div>
      </div>
    </Card>
  );
}
