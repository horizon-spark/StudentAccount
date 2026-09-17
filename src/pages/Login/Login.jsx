import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Card, TextInput, Text } from '@gravity-ui/uikit';
import { useAuthStore } from '@/store';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? '/dashboard';

  const login = useAuthStore((s) => s.login);
  const status = useAuthStore((s) => s.status);
  const error = useAuthStore((s) => s.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = status === 'loading';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch {
      // ошибка уже в сторе
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--g-color-base-background)',
      }}
    >
      <Card view="filled" style={{ padding: 32, width: 380 }}>
        <Text variant="header-2" style={{ marginBottom: 20 }}>
          Вход в личный кабинет
        </Text>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <TextInput
            size="l"
            placeholder="Email"
            value={email}
            onUpdate={setEmail}
            disabled={isLoading}
          />
          <TextInput
            size="l"
            type="password"
            placeholder="Пароль"
            value={password}
            onUpdate={setPassword}
            disabled={isLoading}
          />

          {error && (
            <Text color="danger" variant="body-1">
              {error}
            </Text>
          )}

          <Button
            view="action"
            size="l"
            width="max"
            type="submit"
            loading={isLoading}
            disabled={isLoading}
          >
            Войти
          </Button>
        </form>
      </Card>
    </div>
  );
}
