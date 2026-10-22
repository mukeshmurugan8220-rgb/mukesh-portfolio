import "./Projects.css";

const projects = [
  {
    title: "Bulk Mail Application",
    category: "Full Stack Development",
    desc: "A bulk email application built to send emails efficiently using React, Node.js, Express.js, MongoDB, and Nodemailer.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Nodemailer"],
    github: "https://github.com/mukeshmurugan8220-rgb",
    demo: "https://bulkmail-frontend-phi.vercel.app/",
    number: "01",
    icon: "✉️",
  },
  {
    title: "ShopSphere E-Commerce",
    category: "Full Stack Development",
    desc: "A responsive e-commerce website featuring product listings, user authentication, and shopping functionality using the MERN stack.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mukeshmurugan8220-rgb",
    demo: "https://shopsphere-frontend.netlify.app/",
    number: "02",
    icon: "🛍️",
  },
  {
    title: "Weather Report App",
    category: "Frontend Development",
    desc: "A responsive weather application that displays weather information for different cities through a user-friendly interface.",
    tech: ["React", "JavaScript", "Weather API", "CSS"],
    github: "https://github.com/mukeshmurugan8220-rgb",
    demo: "https://mukeshmurugan8220-rgb.github.io/weather-app/",
    number: "03",
    icon: "🌦️",
  },
  {
    title: "Random Number Generator",
    category: "JavaScript Application",
    desc: "An interactive application that generates random numbers within a user-defined range.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/mukeshmurugan8220-rgb",
    demo: "https://mukeshmurugan8220-rgb.github.io/Random-Number-Generator",
    number: "04",
    icon: "🎲",
  },
  {
    title: "Favourite Students List",
    category: "React Application",
    desc: "An interactive application for displaying and managing a list of favourite students with a clean, responsive interface.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/mukeshmurugan8220-rgb",
    demo: "https://mukeshmurugan8220-rgb.github.io/Favourite-Students/",
    number: "05",
    icon: "❤️",
  },
  {
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    desc: "A modern, responsive personal portfolio showcasing my profile, technical skills, projects, and contact information with smooth animations.",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    github: "https://github.com/mukeshmurugan8220-rgb",
    demo: "https://mukesh-portfolio-uegd.vercel.app/",
    number: "06",
    icon: "💻",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <span className="projects-label">MY WORK</span>

        <h2>
          Featured <span className="highlight">Projects</span>
        </h2>

        <p>
          Explore my projects built with modern web technologies,
          focusing on responsive design and practical functionality.
        </p>
      </div>

      <div className="project-container">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <div className="project-icon" aria-hidden="true">
              {project.icon}
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.desc}
            </p>

            <div className="project-tech">
              {project.tech.map((technology) => (
                <span className="tech-badge" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-github"
                aria-label={`View ${project.title} GitHub profile`}
              >
                GitHub <span>↗</span>
              </a>

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-demo"
                  aria-label={`Open ${project.title} live demo`}
                >
                  Live Demo <span>↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;