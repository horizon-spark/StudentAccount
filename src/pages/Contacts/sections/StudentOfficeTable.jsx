import { Text } from '@gravity-ui/uikit';

export default function StudentOfficeTable({ specialists }) {
  return (
    <table className="contacts-table">
      <thead>
        <tr>
          <th>Специалист</th>
          <th>Институт</th>
          <th>Email</th>
          <th>Телефон</th>
        </tr>
      </thead>
      <tbody>
        {specialists.map((s) => (
          <tr key={s.id}>
            <td>
              <Text variant="body-2">{s.name}</Text>
            </td>
            <td>
              <Text variant="body-2" color="secondary">
                {s.institute}
              </Text>
            </td>
            <td>
              <a href={`mailto:${s.email}`} className="contact-link">
                {s.email}
              </a>
            </td>
            <td>
              <a href={`tel:${s.phone.replace(/[^\d+]/g, '')}`} className="contact-link">
                {s.phone}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
