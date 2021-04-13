import DialogMessages from './../Dialog-messages/Dialog-messages';
import Dialogs from './../Dialogs/Dialogs';
import './Communication.css';

const Communication = () => {
  return (
    <div className="communication">
      <div className="communication__messages">
        <DialogMessages />
      </div>
      <div className="communication__dialogs">
        <Dialogs />
      </div>
    </div>
  );
};

export default Communication;
