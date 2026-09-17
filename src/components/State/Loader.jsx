import { Loader as GLoader } from '@gravity-ui/uikit';

export default function Loader({ text = 'Загрузка…' }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        padding: 48,
        color: 'var(--g-color-text-secondary)',
      }}
    >
      <GLoader size="l" />
      <span>{text}</span>
    </div>
  );
}
