import { useNavigate } from 'react-router-dom';
import { Button, Text } from '@gravity-ui/uikit';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <Text variant="display-3" className="notfound-code">
        404
      </Text>
      <Text variant="header-2" className="notfound-title">
        Страница не найдена
      </Text>
      <Text variant="body-2" color="secondary" className="notfound-description">
        Возможно, она была удалена или вы ошиблись в адресе.
      </Text>

      <div className="notfound-actions">
        <Button view="action" size="l" onClick={() => navigate('/')}>
          На главную
        </Button>
      </div>
    </div>
  );
}
