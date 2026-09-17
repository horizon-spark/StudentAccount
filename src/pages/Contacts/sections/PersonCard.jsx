import { Text } from '@gravity-ui/uikit';
import { Envelope, Smartphone, Comment } from '@gravity-ui/icons';
import ContactRow from './ContactRow.jsx';

const extraIconMap = {
  vk: Comment,
  telegram: Comment,
  max: Comment,
};

export default function PersonCard({ person, showDepartment }) {
  return (
    <div className="person-card">
      <Text variant="subheader-2">{person.name}</Text>
      <Text variant="body-2" color="secondary">
        {person.position}
      </Text>
      {showDepartment && person.department && (
        <Text variant="caption-1" color="secondary">
          {person.department}
        </Text>
      )}

      <div className="person-contacts">
        {person.email && (
          <ContactRow icon={Envelope}>
            <a href={`mailto:${person.email}`} className="contact-link">
              {person.email}
            </a>
          </ContactRow>
        )}
        {person.phone && (
          <ContactRow icon={Smartphone}>
            <a href={`tel:${person.phone.replace(/[^\d+]/g, '')}`} className="contact-link">
              {person.phone}
            </a>
          </ContactRow>
        )}
        {person.extra?.map((ex) => (
          <ContactRow key={ex.href} icon={extraIconMap[ex.type] ?? Comment}>
            <a href={ex.href} target="_blank" rel="noopener noreferrer" className="contact-link">
              {ex.label}
            </a>
          </ContactRow>
        ))}
      </div>
    </div>
  );
}
