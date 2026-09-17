import { useLinksStore } from '@/store';
import { useAsyncData } from '@/store/lib/useAsyncData.js';
import { AsyncBoundary } from '@/components/State';
import LinkCard from './sections/LinkCard.jsx';
import './Links.css';

export default function Links() {
  const { data: links, status, error, fetch } = useAsyncData(useLinksStore);

  return (
    <AsyncBoundary status={status} error={error} onRetry={fetch}>
      {links && <LinksContent links={links} />}
    </AsyncBoundary>
  );
}

function LinksContent({ links }) {
  return (
    <div className="links-page">
      <div className="links-grid">
        {links.map((section) => (
          <LinkCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
