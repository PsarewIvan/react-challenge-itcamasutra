import DialogItem from './../Dialog-item/Dialog-item';
import './Dialogs.css';

const dialogs = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Anna Bell' },
  { id: 3, name: 'Lori Chase' },
  { id: 4, name: 'Ken Lee' },
];

const Dialogs = () => {
  const dialogItems = dialogs.map((dialog) => {
    return (
      <li className="dialogs__element">
        <DialogItem name={dialog.name} id={dialog.id} />
      </li>
    );
  });

  return (
    <div className="dialogs">
      <h5 className="dialogs__title">Members</h5>
      <ul className="dialogs__list">{dialogItems}</ul>
    </div>
  );
};

export default Dialogs;
