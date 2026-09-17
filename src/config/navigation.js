import {
  FileText,
  GraduationCap,
  CrownDiamond,
  Briefcase,
  Link as LinkIcon,
  Smartphone,
} from '@gravity-ui/icons';

export const cabinetSections = [
  {
    id: 'general',
    title: 'Основные сведения',
    description: 'Личные данные, документы, группа',
    icon: FileText,
    path: '/general',
    color: 'info',
  },
  {
    id: 'education',
    title: 'Учебная деятельность',
    description: 'Расписание, оценки, задания, курсы',
    icon: GraduationCap,
    path: '/education',
    color: 'positive',
  },
  {
    id: 'portfolio',
    title: 'Портфолио достижений',
    description: 'Олимпиады, конкурсы, сертификаты',
    icon: CrownDiamond,
    path: '/portfolio',
    color: 'warning',
  },
  {
    id: 'office',
    title: 'Студенческий Офис',
    description: 'Заявки, справки, обращения',
    icon: Briefcase,
    path: '/office',
    color: 'utility',
  },
  {
    id: 'links',
    title: 'Полезные ссылки',
    description: 'Библиотека, портал, сервисы',
    icon: LinkIcon,
    path: '/links',
    color: 'utility',
  },
  {
    id: 'contacts',
    title: 'Контакты',
    description: 'Преподаватели, деканат, поддержка',
    icon: Smartphone,
    path: '/contacts',
    color: 'utility',
  },
];
