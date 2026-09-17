import { Text, Icon } from '@gravity-ui/uikit';
import { ArrowUpRightFromSquare, ChevronRight } from '@gravity-ui/icons';
import SmartLink from './SmartLink.jsx';

export default function LinkItem({ link }) {
  const isExternal = link.external || /^https?:\/\//i.test(link.href);

  return (
    <SmartLink href={link.href} external={link.external} className="links-item">
      <Icon data={ChevronRight} size={14} className="links-item-icon" />
      <Text variant="body-2" className="links-item-text">
        {link.label}
      </Text>
      {isExternal && (
        <Icon data={ArrowUpRightFromSquare} size={12} className="links-item-external" />
      )}
    </SmartLink>
  );
}
