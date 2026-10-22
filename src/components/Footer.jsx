
import "./Footer.css";
import { FaHeart, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          Mukesh<span>.</span>
        </a>

        <p className="footer-text">
          Building modern & responsive web applications.
        </p>

        <button
          className="footer-top-button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mukesh. All Rights Reserved.</p>

        <p className="footer-made">
          Built with <span>React.js</span> & <FaHeart className="footer-heart" />
        </p>
      </div>
    </footer>
  );
}

export default Footer;

