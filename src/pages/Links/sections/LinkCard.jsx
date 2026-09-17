import { Card, Text, Icon } from '@gravity-ui/uikit';
import { Calendar } from '@gravity-ui/icons';
import { linkIconMap } from './linkIcons.js';
import LinkItem from './LinkItem.jsx';

export default function LinkCard({ section }) {
  const IconComponent = linkIconMap[section.icon] ?? Calendar;

  return (
    <Card view="filled" className="links-card">
      <div className="links-card-header">
        <div className="links-card-icon">
          <Icon data={IconComponent} size={22} />
        </div>
        <div className="links-card-header-text">
          <Text variant="subheader-2">{section.title}</Text>
          {section.description && (
            <Text variant="caption-1" color="secondary" className="links-card-description">
              {section.description}
            </Text>
          )}
        </div>
      </div>

      <div className="links-list">
        {section.links.map((link) => (
          <LinkItem key={link.id} link={link} />
        ))}
      </div>
    </Card>
  );
}
