export const debtStatuses = {
  paid: { theme: 'success', text: 'Оплачено' },
  pending: { theme: 'warning', text: 'Ожидает оплаты' },
  overdue: { theme: 'danger', text: 'Просрочено' },
};

export const bypassStatuses = {
  signed: { theme: 'success', text: 'Подписано' },
  pending: { theme: 'info', text: 'Ожидает' },
  problem: { theme: 'danger', text: 'Есть проблема' },
};

export const certStatuses = {
  ready: { theme: 'success', text: 'Готова' },
  pending: { theme: 'warning', text: 'В обработке' },
  rejected: { theme: 'danger', text: 'Отклонена' },
};
