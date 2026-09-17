import { Link } from 'react-router-dom';
import { Card, Text, Icon } from '@gravity-ui/uikit';
import { ChevronRight } from '@gravity-ui/icons';
import './NavigationGrid.css';

export default function NavigationGrid({ sections }) {
  return (
    <div className="nav-grid">
      {sections.map((s) => (
        <Link key={s.id} to={s.path} className="nav-grid-link">
          <Card view="filled" className="nav-tile">
            <div className="nav-tile-inner">
              <div className="nav-tile-icon">
                <Icon data={s.icon} size={22} />
              </div>

              <div className="nav-tile-text">
                <Text variant="subheader-2">{s.title}</Text>
                <Text variant="caption-1" color="secondary" className="nav-tile-desc">
                  {s.description}
                </Text>
              </div>

              <Icon data={ChevronRight} size={16} className="nav-tile-arrow" />
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
