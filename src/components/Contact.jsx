import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>
          I’d love to hear from you! Whether it’s a project, job opportunity,
          or just a chat, feel free to reach out.
        </p>

        <div className="contact-wrapper">
          <form
            action="https://formspree.io/f/yourFormID"
            method="POST"
            className="contact-form"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Your City, Country</p>
            <div className="social-icons">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
