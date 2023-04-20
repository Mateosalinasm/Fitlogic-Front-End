import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <div className="thank-you-container">
          <video className='wrapper-message' src="/assets/images/FitLogic-contactusmessage.mp4" 
          autoPlay
          loop
          muted>
          </video>
        </div>
    );
  }

  return (
    <div className='parent-wrapper'>
      <div className='contact-image-wrapper'>
          <img className='form-image' src="/assets/images/workout/dips.png" alt="Contact us" />
          <img className='divider' src="/assets/images/divider2.png" alt="Contact us" />
        </div>
      <div className='wrapper-form'>
        <div className='form-container'>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className='contact-label'  htmlFor="name">Name</label>
              <input className='contact-input' type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label className='contact-label'  htmlFor="email">Email</label>
              <input className='contact-input' type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label className='contact-label' htmlFor="description">Message</label>
              <textarea  id="description" name="description" required />
            </div>
            <div className="wrap">
            <button className="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
