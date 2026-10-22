
import { useEffect, useState } from "react";
import "./Hero.css";
import profile from "../assets/mukesh.jpg";

function Hero() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Web Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let delay = deleting ? 45 : 90;

    if (!deleting && displayText === currentRole) {
      delay = 1500;
    } else if (deleting && displayText === "") {
      delay = 400;
    }

    const timer = setTimeout(() => {
      if (!deleting && displayText === currentRole) {
        setDeleting(true);
      } else if (deleting && displayText === "") {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (deleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <span className="hero-badge">
          👋 Welcome to my portfolio
        </span>

        <h1>
          Hi, I'm <span className="highlight">Mukesh</span>
        </h1>

        <h2 className="hero-role">
          {displayText}
          <span className="typing-cursor">|</span>
        </h2>

        <p className="hero-description">
          B.Sc Computer Science Graduate | MERN Stack Developer
        </p>

        <p className="hero-subtitle">
          I build modern, responsive web applications using React,
          Node.js, Express.js and MongoDB.
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/mukeshmurugan8220-rgb"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            <span>GitHub ↗</span>
          </a>

          <a href="#projects" className="hero-project-btn">
            View My Projects ↓
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-image-glow"></div>

        <img
          src={profile}
          alt="Mukesh - Full Stack Developer"
          fetchPriority="high"
        />

        <div className="floating-badge badge-top">
          💻 MERN Stack
        </div>

        <div className="floating-badge badge-bottom">
          🚀 Web Developer
        </div>
      </div>
    </section>
  );
}

export default Hero;

