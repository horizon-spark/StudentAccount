import { Text, Icon } from '@gravity-ui/uikit';

export default function ContactRow({ icon, children }) {
  return (
    <div className="contact-row">
      <Icon data={icon} size={14} className="contact-row-icon" />
      <Text variant="body-2">{children}</Text>
    </div>
  );
}
