import {
  Calendar,
  CrownDiamond,
  Clock,
  Envelope,
  FileText,
  TriangleExclamation,
  Bell,
  ListUl,
  Headphones,
} from '@gravity-ui/icons';

export const iconMap = {
  calendar: Calendar,
  grade: CrownDiamond,
  clock: Clock,
  mail: Envelope,
  news: FileText,
  support: Headphones,
  warning: TriangleExclamation,
  announcement: Bell,
  survey: ListUl,
};

export const accentMap = {
  warning: 'var(--g-color-text-warning)',
  positive: 'var(--g-color-text-positive)',
  danger: 'var(--g-color-text-danger)',
  default: 'var(--g-color-text-primary)',
};
