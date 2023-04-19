import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <img className='wrapper-message' src="/assets/images/FitLogic-contactusmessage.gif" alt="Thank you for your message" />
    );
  }

  return (
    <div className='wrapper-form'>
      <div className='form-container'>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Message</label>
            <textarea id="description" name="description" required />
          </div>
          <div class="wrap">
          <button class="submit">Submit</button>
          </div>
        </form>
        <img className='form-image' src="/assets/images/contact-us.jpg" alt="Contact us" />
      </div>
    </div>
  );
};

export default Contact;
