import DialogItem from './../Dialog-item/Dialog-item';
import './Dialogs.css';

const Dialogs = () => {
  return (
    <div className="dialogs">
      <h5 className="dialogs__title">Members</h5>
      <ul className="dialogs__list">
        <li className="dialogs__li">
          <DialogItem name="John Doe" id="1" />
        </li>
        <li className="dialogs__li">
          <DialogItem name="Anna Bell" id="2" />
        </li>
        <li className="dialogs__li">
          <DialogItem name="Lori Chase" id="3" />
        </li>
        <li className="dialogs__li">
          <DialogItem name="Ken Lee" id="4" />
        </li>
      </ul>
    </div>
  );
};

export default Dialogs;
