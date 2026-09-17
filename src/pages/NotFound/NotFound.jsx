import { Link } from 'react-router-dom';
import { Button, Card, Text } from '@gravity-ui/uikit';

export default function NotFound() {
  return (
    <div style={{ padding: 40, display: 'flex', justifyContent: 'center' }}>
      <Card view="filled" style={{ padding: 32, textAlign: 'center', maxWidth: 400 }}>
        <Text variant="display-2">404</Text>
        <Text variant="body-2" color="secondary" style={{ margin: '12px 0 20px' }}>
          Страница не найдена
        </Text>
        <Link to="/dashboard">
          <Button view="action">На главную</Button>
        </Link>
      </Card>
    </div>
  );
}
