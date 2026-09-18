import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Card, TextInput, Text } from '@gravity-ui/uikit';
import { useAuthStore } from '@/store';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? '/dashboard';

  const login = useAuthStore((s) => s.login);
  const status = useAuthStore((s) => s.status);
  const error = useAuthStore((s) => s.error);
  const resetError = useAuthStore((s) => s.resetError);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState(false);

  const emailRef = useRef(null);
  const isLoading = status === 'loading';

  // Сброс ошибки при входе на страницу
  useEffect(() => {
    if (resetError) resetError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Автофокус на email
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const emailError = touched && !email.trim() ? 'Укажите email' : null;
  const passwordError = touched && !password ? 'Укажите пароль' : null;
  const canSubmit = email.trim() && password && !isLoading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (!email.trim() || !password) return;

    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch {}
  };

  return (
    <div className="login-page">
      <Card view="filled" className="login-card">
        <Text variant="header-2" className="login-title">
          Вход в личный кабинет
        </Text>

        <form onSubmit={handleSubmit} className="login-form" noValidate>
          <TextInput
            ref={emailRef}
            size="l"
            type="email"
            placeholder="Email"
            value={email}
            onUpdate={setEmail}
            disabled={isLoading}
            validationState={emailError ? 'invalid' : undefined}
            errorMessage={emailError ?? undefined}
          />

          <TextInput
            size="l"
            type="password"
            placeholder="Пароль"
            value={password}
            onUpdate={setPassword}
            disabled={isLoading}
            validationState={passwordError ? 'invalid' : undefined}
            errorMessage={passwordError ?? undefined}
          />

          {error && (
            <Text color="danger" variant="body-1" className="login-error">
              {error}
            </Text>
          )}

          <Button
            view="action"
            size="l"
            width="max"
            type="submit"
            loading={isLoading}
            disabled={!canSubmit}
          >
            Войти
          </Button>
        </form>
      </Card>
    </div>
  );
}
