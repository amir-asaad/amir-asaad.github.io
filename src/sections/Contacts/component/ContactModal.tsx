import React, { useState } from 'react';

import Modal, { Styles } from 'react-modal';

interface Props {
  isSuccessEmail: boolean;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  onCancelCallback: () => void;
}

const ContactModal: React.FC<Props> = (props) => {
  const [modalStyles] = useState<Styles>({
    content: {
      margin: 'auto',
      maxWidth: '350px',
      height: '120px'
    }
  });

  const onCancel = () => {
    if (props.isSuccessEmail) {
      props.onCancelCallback();
    }

    props.setIsOpenModal(false);
  };

  return (
    <Modal
      isOpen={props.isOpenModal}
      ariaHideApp={false}
      style={modalStyles}
      overlayClassName="contact-modal-overlay"
      contentLabel="Contact modal alert"
    >
      <h3
        className={`mb-8 black--text text-center ${
          props.isSuccessEmail ? 'green--text' : 'red--text'
        }`}
      >
        {props.isSuccessEmail
          ? 'Email sent successfully.'
          : 'Mail delivery failed.'}
      </h3>
      <div className="text-center">
        <button
          className="contact-modal-button"
          onClick={onCancel}
        >
          Ok
        </button>
      </div>
    </Modal>
  );
};

export default ContactModal;
