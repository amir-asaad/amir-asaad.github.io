import React, { useCallback, useState } from 'react';
import { useForm } from '@formspree/react';

import '../styles/contacts.css';
import ContactModal from './ContactModal';

const Contacts = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  const [isSuccessEmail, setIsSuccessEmail] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [state, handleSubmit] = useForm('meqwjnkl');

  const successEmail = useCallback(() => {
    setEmail('');
    setFullName('');
    setMessage('');
  }, []);

  const onSubmit = async ($event: any) => {
    $event.preventDefault();

    const data = await handleSubmit($event);

    setIsSuccessEmail(data.body.ok);
    setIsOpenModal(true);
  };

  return (
    <section className="contacts-section">
      <h2 className="text-center">Contacts</h2>
      <form
        method="POST"
        onSubmit={($event) => onSubmit($event)}
      >
        <input
          type="hidden"
          name="subject"
          value="From own website"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          className="mb-4"
          type="email"
          name="email"
          placeholder="Email"
          required
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          value={fullName}
          className="mb-4"
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFullName(e.target.value);
          }}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          className="mb-4"
          name="message"
          placeholder="Message"
          required
          rows={5}
          onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
        />

        <input
          type="submit"
          value="Submit"
          disabled={state.submitting}
        />
      </form>
      <ContactModal
        isSuccessEmail={isSuccessEmail}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        onCancelCallback={successEmail}
      />
    </section>
  );
};

export default Contacts;
