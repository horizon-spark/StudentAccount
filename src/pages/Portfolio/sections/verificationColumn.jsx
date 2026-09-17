import { Label } from '@gravity-ui/uikit';

export const verificationColumn = {
  id: 'verified',
  name: 'Проверено',
  width: 120,
  template: (item) => (
    <Label theme={item.verified ? 'success' : 'warning'} size="s">
      {item.verified ? 'Проверено' : 'На проверке'}
    </Label>
  ),
};
