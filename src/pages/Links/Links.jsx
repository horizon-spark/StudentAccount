import { Link } from 'react-router-dom';
import { Card, Text, Icon } from '@gravity-ui/uikit';
import {
  Calendar,
  GraduationCap,
  Persons,
  BookOpen,
  House,
  ListUl,
  Cloud,
  Envelope,
  ArrowUpRightFromSquare,
  ChevronRight,
} from '@gravity-ui/icons';
import { useLinksStore } from '@/store';
import { useAsyncData } from '@/store/lib/useAsyncData.js';
import { AsyncBoundary } from '@/components/State';
import './Links.css';

// Ключи из mockLinks -> реальные иконки Gravity UI
const iconMap = {
  calendar: Calendar,
  eios: GraduationCap,
  associations: Persons,
  library: BookOpen,
  dorm: House,
  events: ListUl,
  services: Cloud,
  mail: Envelope,
};

// Внутренние ссылки — через react-router, внешние — через <a>
function SmartLink({ href, external, children }) {
  const isExternal = external || /^https?:\/\//i.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="links-item">
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className="links-item">
      {children}
    </Link>
  );
}

export default function Links() {
  const { data: links, status, error, fetch } = useAsyncData(useLinksStore);

  return (
    <AsyncBoundary status={status} error={error} onRetry={fetch}>
      {links && <LinksContent links={links} />}
    </AsyncBoundary>
  );
}

function LinksContent({ links }) {
  return (
    <div className="links-page">
      <div className="links-grid">
        {links.map((section) => {
          const IconComponent = iconMap[section.icon] ?? Calendar;

          return (
            <Card key={section.id} view="filled" className="links-card">
              {/* Заголовок секции */}
              <div className="links-card-header">
                <div className="links-card-icon">
                  <Icon data={IconComponent} size={22} />
                </div>
                <div>
                  <Text variant="subheader-2">{section.title}</Text>
                  {section.description && (
                    <Text
                      variant="caption-1"
                      color="secondary"
                      style={{ display: 'block', marginTop: 2 }}
                    >
                      {section.description}
                    </Text>
                  )}
                </div>
              </div>

              {/* Список ссылок */}
              <div className="links-list">
                {section.links.map((link) => (
                  <SmartLink key={link.id} href={link.href} external={link.external}>
                    <Icon data={ChevronRight} size={14} className="links-item-icon" />
                    <Text variant="body-2" className="links-item-text">
                      {link.label}
                    </Text>
                    {(link.external || /^https?:\/\//i.test(link.href)) && (
                      <Icon
                        data={ArrowUpRightFromSquare}
                        size={12}
                        className="links-item-external"
                      />
                    )}
                  </SmartLink>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
