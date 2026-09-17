import { useState } from 'react';
import { Card, Text, Icon } from '@gravity-ui/uikit';
import { Calendar, ChevronRight, ChevronDown } from '@gravity-ui/icons';
import { iconMap, accentMap } from './widgetIcons.js';
import { hasDetails } from './hasDetails.js';
import SmartLink from './SmartLink.jsx';
import '../PersonalWidgets.css';

function WidgetBody({ w }) {
  return (
    <div className="widget-content">
      {(w.primary || w.secondary) && (
        <div className="widget-body">
          {w.primary && (
            <Text variant="body-2" className="widget-primary">
              {w.primary}
            </Text>
          )}
          {w.secondary && (
            <Text variant="caption-2" color="secondary" className="widget-secondary">
              {w.secondary}
            </Text>
          )}
        </div>
      )}

      {Array.isArray(w.items) && w.items.length > 0 && (
        <div className="widget-body widget-list">
          {w.items.map((it) => (
            <SmartLink
              key={it.id}
              href={it.href}
              external={it.external}
              className="widget-list-item"
            >
              <Text variant="body-2" className="widget-list-label">
                {it.label}
              </Text>
              {it.value !== undefined && (
                <Text variant="caption-2" color="secondary" className="widget-list-value">
                  {typeof it.value === 'number' ? `${it.value} ${it.unit ?? ''}`.trim() : it.value}
                </Text>
              )}
            </SmartLink>
          ))}
        </div>
      )}

      {w.more && (
        <SmartLink href={w.more.href} external={w.more.external} className="widget-more">
          <Text variant="caption-2">{w.more.label}</Text>
          <Icon data={ChevronRight} size={10} />
        </SmartLink>
      )}
    </div>
  );
}

export default function Widget({ w }) {
  const [isOpen, setOpen] = useState(false);

  const IconComponent = iconMap[w.icon] ?? Calendar;
  const accent = accentMap[w.accent] ?? accentMap.default;
  const expandable = hasDetails(w);

  const toggle = () => {
    if (!expandable) return;
    setOpen((v) => !v);
  };

  return (
    <Card view="outlined" className={`widget${isOpen ? ' widget--open' : ''}`}>
      <div
        className={`widget-header${expandable ? ' widget-header--clickable' : ''}`}
        onClick={toggle}
        role={expandable ? 'button' : undefined}
        tabIndex={expandable ? 0 : undefined}
        aria-expanded={expandable ? isOpen : undefined}
        onKeyDown={(e) => {
          if (!expandable) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <Icon data={IconComponent} size={16} className="widget-icon" style={{ color: accent }} />
        <Text variant="subheader-1" className="widget-title">
          {w.title}
        </Text>

        {expandable && (
          <Icon
            data={ChevronDown}
            size={14}
            className={`widget-chevron${isOpen ? ' widget-chevron--open' : ''}`}
          />
        )}
      </div>

      {expandable && isOpen && <WidgetBody w={w} />}
    </Card>
  );
}
