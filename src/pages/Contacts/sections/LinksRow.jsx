import { Icon } from '@gravity-ui/uikit';
import { ArrowUpRightFromSquare } from '@gravity-ui/icons';

export default function LinksRow({ links }) {
  return (
    <div className="contacts-links-row">
      {links.map((l) => (
        <a
          key={l.id}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link-row"
        >
          {l.label} <Icon data={ArrowUpRightFromSquare} size={12} />
        </a>
      ))}
    </div>
  );
}
