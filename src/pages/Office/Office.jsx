import { useOfficeStore } from '@/store';
import { useAsyncData } from '@/store/lib/useAsyncData.js';
import { AsyncBoundary } from '@/components/State';

import AcademicDebtsSection from './sections/AcademicDebtsSection.jsx';
import ScholarshipsSection from './sections/ScholarshipsSection.jsx';
import OrdersSection from './sections/OrdersSection.jsx';
import CertificatesSection from './sections/CertificatesSection.jsx';
import PaymentsSection from './sections/PaymentsSection.jsx';
import BypassSheetSection from './sections/BypassSheetSection.jsx';

import './Office.css';

export default function Office() {
  const { data: o, status, error, fetch } = useAsyncData(useOfficeStore);

  return (
    <AsyncBoundary status={status} error={error} onRetry={fetch}>
      {o && <OfficeContent o={o} />}
    </AsyncBoundary>
  );
}

function OfficeContent({ o }) {
  return (
    <div className="office-page">
      <AcademicDebtsSection data={o.academicDebts} />
      <ScholarshipsSection data={o.scholarships} />
      <OrdersSection orders={o.orders} />
      <CertificatesSection data={o.certificates} />
      <PaymentsSection data={o.payments} />
      <BypassSheetSection data={o.bypassSheet} />
    </div>
  );
}
