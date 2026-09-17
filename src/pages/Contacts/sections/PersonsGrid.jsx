import PersonCard from './PersonCard.jsx';

export default function PersonsGrid({ persons, showDepartment }) {
  return (
    <div className="persons-grid">
      {persons.map((p) => (
        <PersonCard key={p.id} person={p} showDepartment={showDepartment} />
      ))}
    </div>
  );
}
