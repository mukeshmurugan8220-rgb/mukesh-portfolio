
import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      description: "Web Page Structure",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      description: "Responsive Web Design",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      description: "Interactive Web Apps",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      description: "Frontend Development",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      description: "Backend Development",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      description: "REST API Development",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      description: "NoSQL Database",
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt />,
      description: "Version Control",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-heading">
        <span className="skills-label">MY TECHNICAL EXPERTISE</span>

        <h2>
          My <span>Skills</span>
        </h2>

        <p>
          Technologies and tools I use to build modern,
          responsive, and user-friendly web applications.
        </p>
      </div>

      <div className="skill-container">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <div className="skill-icon" aria-hidden="true">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <p className="skill-description">
              {skill.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
