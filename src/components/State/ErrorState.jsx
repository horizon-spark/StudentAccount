import { Button, Text } from '@gravity-ui/uikit';

export default function ErrorState({ message, onRetry }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        padding: 48,
      }}
    >
      <Text variant="subheader-2" color="danger">
        Что-то пошло не так
      </Text>
      {message && <Text color="secondary">{message}</Text>}
      {onRetry && (
        <Button view="action" onClick={onRetry}>
          Повторить
        </Button>
      )}
    </div>
  );
}
