import { useState } from "react";
import Button from "../button";
import Header from "../header";
import Input from "../input";
import Label from "../label";
import Modal from "../modal";
import './join-modal.scss';

function JoinHeader() {
  return (
    <Header text='Add Website' align='left' />
  );
}

function JoinBody({
  onChange
}: {
  onChange: (text: string) => void
}) {
  return (
    <div className='join-body'>
      <Label
        text='URL: '
        gridArea='label'
      />
      <Input
        placeholder='url'
        onChange={onChange}
        gridArea='text'
      />
    </div>
  );
}

function JoinEnding({
  onAccept,
  onCancel
}: {
  onAccept: () => void,
  onCancel: () => void
}) {
  return (
    <div className='join-ending'>
      <Button
        text='Add'
        onClick={onAccept}
        inverted={true}
        gridArea='join'
      />
      <Button
        text='Cancel'
        onClick={onCancel}
        gridArea='cancel'
      />
    </div>
  );
}

// The join modal component that encapsulates the modal component
// Combine modal UI and join logic into one component
export default function JoinModal({
  show,
  onAccept,
  onClose
}: {
  show: boolean,
  onAccept: (url: string) => void
  onClose: () => void
}) {
  const [roomCode, setRoomCode] = useState('');

  return (
    <Modal
      show={show}
      header={<JoinHeader />}
      body={<JoinBody onChange={setRoomCode} />}
      ending={
        <JoinEnding
          onAccept={() => {
            onAccept(roomCode);
            onClose();
          }}
          onCancel={onClose}
        />
      }
      width='tiny'
      onClose={onClose}
    />
  );
}
