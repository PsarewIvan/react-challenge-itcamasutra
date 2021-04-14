import DialogItem from './../Dialog-item/Dialog-item';
import './Dialogs.css';

const Dialogs = (props) => {
  const dialogItems = props.dialogs.map((dialog) => {
    return (
      <li className="dialogs__element" key={`dialogs-element-${dialog.id}`}>
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
