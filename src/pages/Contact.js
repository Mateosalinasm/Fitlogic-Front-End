import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
     
  if (submitted) {
    return <img className="wrapper-message" src='/assets/FitLogic-contactusmessage.gif'></img>;
  }

  return (
    <div className='wrapper-form'>
    <form className="contact-form">
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
      
    </form>

    <div class="container-1">
  <a href="#" class="button" onClick={handleSubmit}>
    <div class="plate"></div>
    <div class="plate"></div>
    <div class="plate"></div>
    <div class="plate"></div>
    <div class="plate"></div>
    <div class="button__wrapper">
      <span class="button__text">Submit</span>
    </div>
    <div class="button__box">
      <div class="inner inner__top"></div>
      <div class="inner inner__front"></div>
      <div class="inner inner__bottom"></div>
      <div class="inner inner__back"></div>
      <div class="inner inner__left"></div>
      <div class="inner inner__right"></div>
    </div>
  </a>
</div>

    </div>
  );
};

export default Contact;
