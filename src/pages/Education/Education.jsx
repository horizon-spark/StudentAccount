import { useState } from 'react';
import { Card, Text, Button, Label, Table, Progress } from '@gravity-ui/uikit';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowDownToLine, ArrowRightFromSquare } from '@gravity-ui/icons';
import { useEducationStore } from '@/store';
import { useAsyncData } from '@/store/lib/useAsyncData.js';
import { AsyncBoundary } from '@/components/State';
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
  const [exportRange, setExportRange] = useState('all');

  return (
    <div className="education-page">
      {/* === ЭЛЕКТРОННЫЙ СТУДЕНЧЕСКИЙ БИЛЕТ === */}
      <Card view="filled" className="edu-card">
        <Text variant="header-2">Электронный студенческий билет</Text>
        <div className="student-card-layout">
          <div className="student-card-qr">
            <QRCodeSVG value={e.studentCard.qrData} size={160} />
          </div>
          <div className="student-card-info">
            <Text variant="subheader-2">{e.studentCard.fullName}</Text>
            <Text variant="body-2" color="secondary" style={{ marginTop: 4 }}>
              {e.studentCard.department}
            </Text>
            <div className="student-card-meta">
              <Text variant="caption-2" color="secondary">
                № студенческого
              </Text>
              <Text variant="body-1">{e.studentCard.studentId}</Text>
            </div>
            <div className="student-card-meta">
              <Text variant="caption-2" color="secondary">
                Форма обучения
              </Text>
              <Text variant="body-1">{e.studentCard.educationForm}</Text>
            </div>
            <div className="student-card-meta">
              <Text variant="caption-2" color="secondary">
                Приказ о зачислении
              </Text>
              <Text variant="body-1">{e.studentCard.enrollmentOrder}</Text>
            </div>
            <div className="student-card-meta">
              <Text variant="caption-2" color="secondary">
                Срок действия
              </Text>
              <Label theme="success" size="s">
                {e.studentCard.validUntil}
              </Label>
            </div>
          </div>
        </div>
      </Card>

      {/* === ЭЛЕКТРОННАЯ ЗАЧЁТНАЯ КНИЖКА === */}
      <Card view="filled" className="edu-card">
        <div className="edu-card-header">
          <Text variant="header-2">Электронная зачётная книжка</Text>
          <div className="grade-export">
            <select
              className="grade-export-select"
              value={exportRange}
              onChange={(ev) => setExportRange(ev.target.value)}
            >
              <option value="all">За все семестры</option>
              {e.gradeBook.semesters.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <Button view="action" size="m">
              <Button.Icon>
                <ArrowDownToLine />
              </Button.Icon>
              Выписка из зачётной книжки
            </Button>
          </div>
        </div>

        <div className="average-score">
          <Text variant="body-2" color="secondary">
            Средний балл
          </Text>
          <Text variant="header-1" style={{ marginLeft: 12 }}>
            {e.gradeBook.averageScore}
          </Text>
          <div className="average-progress">
            <Progress value={e.gradeBook.averageScore * 20} theme="success" size="s" />
          </div>
        </div>

        {e.gradeBook.semesters.map((sem) => (
          <div key={sem.id} className="semester-block">
            <Text variant="subheader-2" className="semester-title">
              {sem.name}
            </Text>
            <Table
              data={sem.records}
              columns={[
                { id: 'date', name: 'Дата', width: 110 },
                { id: 'discipline', name: 'Дисциплина', width: 220 },
                { id: 'hours', name: 'Часы / ЗЕТ', width: 110 },
                { id: 'attestation', name: 'Аттестация', width: 130 },
                { id: 'grade', name: 'Оценка', width: 100 },
                { id: 'teacher', name: 'Преподаватель', width: 180 },
              ]}
            />
          </div>
        ))}
      </Card>

      {/* === УЧЕБНЫЙ ПЛАН === */}
      <Card view="filled" className="edu-card">
        <Text variant="header-2">Учебный план</Text>
        <div className="curriculum-links">
          <a href={e.curriculum.fullPlanUrl} className="doc-link" download>
            <ArrowDownToLine size={16} /> Полный учебный план (PDF)
          </a>
          <div className="curriculum-year-list">
            {e.curriculum.byYear.map((y) => (
              <a key={y.id} href={y.url} className="doc-link" download>
                <ArrowDownToLine size={16} /> Учебный план {y.year}
              </a>
            ))}
          </div>
          <div className="curriculum-additional">
            <a href={e.curriculum.kugUrl} className="doc-link" download>
              <ArrowDownToLine size={16} /> КУГ (Календарный учебный график)
            </a>
            <a href={e.curriculum.workProgramsUrl} className="doc-link" download>
              <ArrowDownToLine size={16} /> Рабочие программы дисциплин и практик
            </a>
          </div>
        </div>
      </Card>

      {/* === КУРСЫ В ЭИОС === */}
      <Card view="filled" className="edu-card">
        <div className="edu-card-header">
          <Text variant="header-2">Курсы в ЭИОС МАУ</Text>
          <a href={e.eiosLkUrl} target="_blank" rel="noopener noreferrer" className="eios-lk-link">
            Личный кабинет ЭИОС <ArrowRightFromSquare size={14} />
          </a>
        </div>
        <Table
          data={e.eiosCourses}
          columns={[
            { id: 'index', name: '№', width: 60, template: (_, i) => i + 1 },
            { id: 'name', name: 'Название курса', width: 320 },
            {
              id: 'details',
              name: 'Подробнее',
              width: 160,
              template: (item) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="course-link"
                >
                  Перейти в Moodle
                </a>
              ),
            },
          ]}
        />
      </Card>

      {/* === ГРАФИКИ ИНДИВИДУАЛЬНОЙ РАБОТЫ ПРЕПОДАВАТЕЛЕЙ === */}
      <Card view="filled" className="edu-card">
        <Text variant="header-2">Графики индивидуальной работы преподавателей</Text>
        <Text variant="body-2" color="secondary" style={{ marginTop: 8 }}>
          Графики по всем институтам, факультетам и академиям доступны по ссылке.
        </Text>
        <div style={{ marginTop: 16 }}>
          <a href={e.teacherScheduleUrl} className="doc-link" download>
            <ArrowDownToLine size={16} /> Скачать графики (PDF)
          </a>
        </div>
      </Card>
    </div>
  );
}
