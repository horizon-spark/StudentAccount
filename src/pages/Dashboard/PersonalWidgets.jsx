import Widget from './widgets/Widget.jsx';
import './PersonalWidgets.css';

export default function PersonalWidgets({ widgets }) {
  return (
    <div className="widgets">
      {widgets.map((w) => (
        <Widget key={w.id} w={w} />
      ))}
    </div>
  );
}
