import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "react-bootstrap/Container";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0p8kaml",
        "template_rh37lgh",
        form.current,
        "_SHsbf0E9VxJsL5G9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact">
      <div className="section-title">CONTACT</div>
      <Container>
        <form ref={form} onSubmit={sendEmail}>
          <h2>Contact Form</h2>
          <br />
          <div class="form-group">
            <label for="user-name">Name: </label>
            <input
              type="text"
              id="user-name"
              name="user_name"
              placeholder="enter your name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email: </label>
            <input
              type="text"
              id="email"
              name="user_email"
              placeholder="enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Message: </label>
            <textarea
              id="message"
              name="message"
              placeholder="enter any questions or comments"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
