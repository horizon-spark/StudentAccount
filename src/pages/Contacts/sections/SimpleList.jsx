import { Text, Icon } from '@gravity-ui/uikit';
import { ArrowUpRightFromSquare } from '@gravity-ui/icons';

/**
 * items: { id, label, value?, href? }[]
 * row: показывать label и value/href в одну строку
 */
export default function SimpleList({ items, row = false }) {
  return (
    <div className="contacts-simple-list">
      {items.map((item) => (
        <div
          key={item.id}
          className={`contact-simple-item${row ? ' contact-simple-item-row' : ''}`}
        >
          <Text variant="body-2">{item.label}</Text>

          {item.href ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-link">
              {item.href.replace(/^https?:\/\//, ' ')}{' '}
              <Icon data={ArrowUpRightFromSquare} size={12} />
            </a>
          ) : (
            <Text variant="body-2" color="secondary">
              {item.value}
            </Text>
          )}
        </div>
      ))}
    </div>
  );
}
