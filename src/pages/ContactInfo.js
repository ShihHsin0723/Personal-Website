import React, { useRef } from 'react';
import MainLayout from '../layout/MainLayout'
import emailjs from '@emailjs/browser';

function ContactInfo() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0p8kaml', 'template_rh37lgh', form.current, '_SHsbf0E9VxJsL5G9')
      .then((result) => {
          console.log(result.text);
          alert("Message sent!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
        <MainLayout>
          <div className="items">
            <div className="info-group">
              <h2>Phone Number</h2>
              <ul className="listItems">
                <li><b>Taiwan:</b> <u>+886 911-770-882</u></li>
                <li><b>Canada:</b> <u>+1 416-833-5213</u></li>
              </ul>
            </div>
            <div className="info-group">
              <h2>Email</h2>
              <ul className="listItems">
                <li><b>Personal:</b> <u>shih-hsin-chuang@gmail.com</u></li>
                <li><b>School:</b> <u>phoebe.chuang@mail.utoronto.ca</u></li>
              </ul>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <h2>Contact Form</h2>
              <br />
              <div class="form-group">
                <label for="user-name">Name: </label>
                <input type="text" id="user-name" name="user_name" placeholder="enter your name" required/>
              </div>
              <div class="form-group">
                <label for="email">Email: </label>
                <input type="text" id="email" name="user_email" placeholder="enter your email" required/>
              </div>
              <div class="form-group">
                <label for="message">Message: </label>
                <textarea id="message" name="message" placeholder="enter any questions or comments" required></textarea>
              </div>
              <div class="form-group">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
            
        </MainLayout>
    </div>
  )
}

export default ContactInfo