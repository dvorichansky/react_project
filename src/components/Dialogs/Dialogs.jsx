import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs(props) {

  let dialogsElemets = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = props.messagesData.map(m => <Message message={m.message} id={m.id} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog}>

          {dialogsElemets}

        </div>
      </div>
      <div className={s.messages}>

        {messagesElements}

      </div>
    </div>
  );
}

export default Dialogs;