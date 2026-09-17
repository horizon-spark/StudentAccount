import { Card, Text, Button, Label, Table, Progress } from '@gravity-ui/uikit';
import { Plus, FileArrowDown } from '@gravity-ui/icons';
import { useOfficeStore } from '@/store';
import { useAsyncData } from '@/store/lib/useAsyncData.js';
import { AsyncBoundary } from '@/components/State';
import './Office.css';

// Статусы для разных сущностей
const debtStatuses = {
  paid: { theme: 'success', text: 'Оплачено' },
  pending: { theme: 'warning', text: 'Ожидает оплаты' },
  overdue: { theme: 'danger', text: 'Просрочено' },
};

const bypassStatuses = {
  signed: { theme: 'success', text: 'Подписано' },
  pending: { theme: 'info', text: 'Ожидает' },
  problem: { theme: 'danger', text: 'Есть проблема' },
};

const certStatuses = {
  ready: { theme: 'success', text: 'Готова' },
  pending: { theme: 'warning', text: 'В обработке' },
  rejected: { theme: 'danger', text: 'Отклонена' },
};

export default function Office() {
  const { data: o, status, error, fetch } = useAsyncData(useOfficeStore);

  return (
    <AsyncBoundary status={status} error={error} onRetry={fetch}>
      {o && <OfficeContent o={o} />}
    </AsyncBoundary>
  );
}

function OfficeContent({ o }) {
  const signedCount = o.bypassSheet.items.filter((i) => i.status === 'signed').length;

  return (
    <div className="office-page">
      {/* === АКАДЕМИЧЕСКАЯ ЗАДОЛЖЕННОСТЬ === */}
      <Card view="filled" className="office-card">
        <Text variant="header-2">Академическая задолженность</Text>
        {!o.academicDebts.hasDebts ? (
          <Text variant="body-2" color="secondary" style={{ marginTop: 12 }}>
            Академических задолженностей нет
          </Text>
        ) : (
          <Table
            data={o.academicDebts.items}
            className="office-table"
            columns={[
              { id: 'index', name: '№', width: 50, template: (_, i) => i + 1 },
              { id: 'course', name: 'Курс', width: 80 },
              { id: 'semester', name: 'Семестр', width: 100 },
              { id: 'discipline', name: 'Дисциплина', width: 300 },
              { id: 'teacher', name: 'ФИО преподавателя', width: 220 },
            ]}
          />
        )}
      </Card>

      {/* === СТИПЕНДИИ === */}
      <Card view="filled" className="office-card">
        <div className="office-card-header">
          <Text variant="header-2">Стипендии</Text>
          {o.scholarships.application.isOpen && (
            <Button view="action" size="m">
              <Button.Icon>
                <Plus />
              </Button.Icon>
              Подать заявление на повышенную стипендию
            </Button>
          )}
        </div>

        {o.scholarships.application.isOpen && (
          <div className="scholarship-application-banner">
            <Text variant="body-2">
              Приём заявлений открыт до <b>{o.scholarships.application.deadline}</b>
            </Text>
            <Text variant="caption-1" color="secondary">
              Период: {o.scholarships.application.periodLabel}
            </Text>
          </div>
        )}

        <Table
          data={o.scholarships.history}
          className="office-table"
          columns={[
            { id: 'type', name: 'Тип стипендии', width: 260 },
            {
              id: 'amount',
              name: 'Сумма',
              width: 120,
              template: (item) => `${item.amount.toLocaleString('ru-RU')} ₽`,
            },
            { id: 'periodFrom', name: 'Период с', width: 120 },
            { id: 'periodTo', name: 'по', width: 120 },
            { id: 'reason', name: 'Основание', width: 260 },
            {
              id: 'action',
              name: 'Статус',
              width: 130,
              template: (item) => (
                <Label theme={item.action === 'assigned' ? 'success' : 'danger'} size="s">
                  {item.action === 'assigned' ? 'Назначена' : 'Снята'}
                </Label>
              ),
            },
          ]}
        />
      </Card>

      {/* === ПРИКАЗЫ === */}
      <Card view="filled" className="office-card">
        <Text variant="header-2">Приказы</Text>
        <Table
          data={o.orders}
          className="office-table"
          columns={[
            { id: 'index', name: '№', width: 50, template: (_, i) => i + 1 },
            { id: 'motivation', name: 'Мотивировка', width: 400 },
            { id: 'number', name: 'Номер', width: 140 },
            { id: 'date', name: 'Дата', width: 130 },
            {
              id: 'view',
              name: 'Просмотреть',
              width: 150,
              template: (item) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-link"
                >
                  Открыть PDF
                </a>
              ),
            },
          ]}
        />
      </Card>

      {/* === СПРАВКИ === */}
      <Card view="filled" className="office-card">
        <div className="office-card-header">
          <Text variant="header-2">Справки</Text>
          <Button view="action" size="m">
            <Button.Icon>
              <Plus />
            </Button.Icon>
            Заказать справку
          </Button>
        </div>

        <div className="cert-types">
          {o.certificates.availableTypes.map((t) => (
            <div key={t.id} className="cert-type-card">
              <Text variant="subheader-2">{t.title}</Text>
              <Text variant="caption-1" color="secondary">
                {t.description}
              </Text>
            </div>
          ))}
        </div>

        <Text variant="subheader-2" className="office-subtitle">
          История заявок
        </Text>
        <Table
          data={o.certificates.history}
          className="office-table"
          columns={[
            { id: 'type', name: 'Тип справки', width: 260 },
            {
              id: 'format',
              name: 'Формат',
              width: 160,
              template: (item) => (item.format === 'electronic' ? 'Электронная' : 'Бумажная'),
            },
            { id: 'createdAt', name: 'Дата заявки', width: 140 },
            {
              id: 'status',
              name: 'Статус',
              width: 140,
              template: (item) => (
                <Label theme={certStatuses[item.status].theme} size="s">
                  {certStatuses[item.status].text}
                </Label>
              ),
            },
            {
              id: 'download',
              name: 'Скачать',
              width: 130,
              template: (item) =>
                item.url ? (
                  <a href={item.url} className="office-link" download>
                    <FileArrowDown size={16} /> Скачать
                  </a>
                ) : (
                  <Text variant="caption-1" color="secondary">
                    —
                  </Text>
                ),
            },
          ]}
        />
      </Card>

      {/* === ПЛАТЕЖИ === */}
      <Card view="filled" className="office-card">
        <Text variant="header-2">Платежи</Text>

        {/* Итоговая задолженность */}
        <div className="payments-summary">
          <div className="payment-summary-item">
            <Text variant="caption-2" color="secondary">
              Задолженность по обучению
            </Text>
            <Text
              variant="header-2"
              className={o.payments.totalDebt.education > 0 ? 'debt-positive' : ''}
            >
              {o.payments.totalDebt.education.toLocaleString('ru-RU')} ₽
            </Text>
          </div>
          <div className="payment-summary-item">
            <Text variant="caption-2" color="secondary">
              Задолженность по общежитию
            </Text>
            <Text
              variant="header-2"
              className={o.payments.totalDebt.dorm > 0 ? 'debt-positive' : ''}
            >
              {o.payments.totalDebt.dorm.toLocaleString('ru-RU')} ₽
            </Text>
          </div>
        </div>

        <Table
          data={o.payments.invoices}
          className="office-table"
          columns={[
            { id: 'course', name: 'Курс', width: 70 },
            { id: 'semester', name: 'Семестр', width: 180 },
            { id: 'type', name: 'Тип', width: 130 },
            {
              id: 'amount',
              name: 'Сумма',
              width: 120,
              template: (item) => `${item.amount.toLocaleString('ru-RU')} ₽`,
            },
            {
              id: 'paid',
              name: 'Оплачено',
              width: 120,
              template: (item) => `${item.paid.toLocaleString('ru-RU')} ₽`,
            },
            { id: 'dueDate', name: 'Оплатить до', width: 130 },
            {
              id: 'status',
              name: 'Статус',
              width: 160,
              template: (item) => (
                <Label theme={debtStatuses[item.status].theme} size="s">
                  {debtStatuses[item.status].text}
                </Label>
              ),
            },
            {
              id: 'actions',
              name: 'Действия',
              width: 180,
              template: (item) =>
                item.status === 'paid' ? (
                  <a href="#" className="office-link">
                    Квитанция
                  </a>
                ) : (
                  <Button view="outlined" size="s">
                    Оплатить онлайн
                  </Button>
                ),
            },
          ]}
        />
      </Card>

      {/* === ЭЛЕКТРОННЫЙ ОБХОДНОЙ ЛИСТ === */}
      <Card view="filled" className="office-card">
        <Text variant="header-2">Электронный обходной лист</Text>

        {!o.bypassSheet.isActive ? (
          <Text variant="body-2" color="secondary" style={{ marginTop: 12 }}>
            Активных обходных листов нет
          </Text>
        ) : (
          <>
            <div className="bypass-header">
              <div>
                <Text variant="caption-2" color="secondary">
                  Создан
                </Text>
                <Text variant="body-2">{o.bypassSheet.createdAt}</Text>
              </div>
              <div>
                <Text variant="caption-2" color="secondary">
                  Основание
                </Text>
                <Text variant="body-2">{o.bypassSheet.reason}</Text>
              </div>
              <div className="bypass-progress">
                <Text variant="caption-2" color="secondary">
                  Прогресс: {signedCount} из {o.bypassSheet.items.length}
                </Text>
                <Progress
                  value={(signedCount / o.bypassSheet.items.length) * 100}
                  theme="success"
                  size="s"
                />
              </div>
            </div>

            <Table
              data={o.bypassSheet.items}
              className="office-table"
              columns={[
                { id: 'department', name: 'Подразделение', width: 200 },
                { id: 'responsible', name: 'Ответственный', width: 200 },
                {
                  id: 'status',
                  name: 'Статус',
                  width: 160,
                  template: (item) => (
                    <Label theme={bypassStatuses[item.status].theme} size="s">
                      {bypassStatuses[item.status].text}
                    </Label>
                  ),
                },
                { id: 'comment', name: 'Комментарий', width: 320 },
                { id: 'signedAt', name: 'Подписано', width: 130 },
              ]}
            />
          </>
        )}
      </Card>
    </div>
  );
}
