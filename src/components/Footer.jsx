import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container" data-aos="fade-up">
        <p>
          © {new Date().getFullYear()} <span className="highlight">Your Name</span>.  
          All Rights Reserved.
        </p>
        <div className="footer-socials">
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
    </footer>
  );
}

export default Footer;
