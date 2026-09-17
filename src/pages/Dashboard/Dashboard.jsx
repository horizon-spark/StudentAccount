import StudentCard from './StudentCard.jsx';
import PersonalWidgets from './PersonalWidgets.jsx';
import { useUserStore, useDashboardStore } from '@/store';
import { useAsyncData } from '@/store/lib/useAsyncData.js';
import { AsyncBoundary } from '@/components/State';
import './Dashboard.css';

export default function Dashboard() {
  const {
    data: student,
    status: studentStatus,
    error: studentError,
    fetch: fetchStudent,
  } = useAsyncData(useUserStore);

  const {
    data: widgets,
    status: widgetsStatus,
    error: widgetsError,
    fetch: fetchWidgets,
  } = useAsyncData(useDashboardStore);

  return (
    <div className="dashboard">
      <AsyncBoundary status={studentStatus} error={studentError} onRetry={fetchStudent}>
        {student && <StudentCard student={student} />}
      </AsyncBoundary>

      <AsyncBoundary status={widgetsStatus} error={widgetsError} onRetry={fetchWidgets}>
        {widgets && <PersonalWidgets widgets={widgets} />}
      </AsyncBoundary>
    </div>
  );
}
