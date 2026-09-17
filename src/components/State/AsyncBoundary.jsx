import Loader from './Loader.jsx';
import ErrorState from './ErrorState.jsx';

export default function AsyncBoundary({ status, error, onRetry, children }) {
  if (status === 'idle' || status === 'loading') return <Loader />;
  if (status === 'error') return <ErrorState message={error} onRetry={onRetry} />;
  return children;
}
