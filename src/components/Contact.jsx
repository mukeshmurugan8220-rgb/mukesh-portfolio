
import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <span className="contact-label">GET IN TOUCH</span>

          <h2>
            Contact <span>Me</span>
          </h2>

          <p>
            Have a project idea or a job opportunity?
            Feel free to get in touch with me.
          </p>
        </div>

        {/* Contact Information */}
        <div className="contact-box">

          {/* Email */}
          <a
            href="mailto:mukeshmurugan8220@gmail.com"
            className="contact-item"
          >
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div className="contact-info">
              <h3>Email</h3>
              <p>mukeshmurugan8220@gmail.com</p>
            </div>

            <FaExternalLinkAlt className="contact-arrow" />
          </a>

          {/* Phone */}
          <a
            href="tel:+918220526438"
            className="contact-item"
          >
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div className="contact-info">
              <h3>Phone</h3>
              <p>+91 8220526438</p>
            </div>

            <FaExternalLinkAlt className="contact-arrow" />
          </a>

          {/* Location */}
          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div className="contact-info">
              <h3>Location</h3>
              <p>Tamil Nadu, India</p>
            </div>
          </div>

        </div>

        {/* Social Links */}
        <div className="contact-social">
          <h3>Connect With Me</h3>

          <div className="contact-buttons">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mukesh-m-0b3582312/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
              <FaExternalLinkAlt />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mukeshmurugan8220-rgb"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <FaGithub />
              <span>GitHub</span>
              <FaExternalLinkAlt />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
