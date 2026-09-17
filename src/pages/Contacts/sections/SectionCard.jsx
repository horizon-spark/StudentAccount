import { Card, Text, Icon } from '@gravity-ui/uikit';

export default function SectionCard({
  icon,
  title,
  description,
  action,
  children,
  className = '',
}) {
  const hasHeaderText = title || description;

  return (
    <Card view="filled" className={`contacts-card ${className}`.trim()}>
      <div className="contacts-card-header">
        <div className="contacts-card-icon">
          <Icon data={icon} size={22} />
        </div>

        {hasHeaderText && (
          <div className="contacts-card-header-text">
            {title && <Text variant="header-2">{title}</Text>}
            {description && (
              <Text variant="body-2" color="secondary">
                {description}
              </Text>
            )}
          </div>
        )}

        {action && <div className="contacts-card-header-action">{action}</div>}
      </div>

      {children}
    </Card>
  );
}
