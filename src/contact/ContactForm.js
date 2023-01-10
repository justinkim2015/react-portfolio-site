import React, { useState } from "react";
import './contact.css'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/f7765320-90e9-11ed-a003-6f0b76086b1c";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>I'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className='contact-info-box'
    >
      <h2 className='contact-header'>Send me an email!</h2>
      <div className='input-box'>
        <label id='name'>Name</label>
        <input type="text" name="name" className='input' required />
      </div>
      <div className='input-box'>
        <label id='email'>Email</label>
        <input type="email" name="email" className='input' required />
      </div>
      <div className='input-box'>
        <label id='message'>Message</label>
        <textarea name="message" className='input-textarea' required />
      </div>
      <div>
        <button type="submit" className='submit'> Send message!</button>
      </div>
    </form>
  );
};

export default ContactForm;
