
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <div className="about-heading">
          <span className="about-label">GET TO KNOW ME</span>

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            Passionate Full Stack Developer who enjoys building
            modern, responsive, and user-friendly web applications.
          </p>
        </div>

        <div className="about-content">

          {/* Personal Introduction */}
          <div className="about-text">
            <h3>
              Hello! I'm <span>Mukesh</span> 👋
            </h3>

            <p>
              I am a Computer Science learner and aspiring Full
              Stack Developer with practical experience building
              web applications using the MERN stack.
            </p>

            <p>
              I work with React.js, Node.js, Express.js, and MongoDB
              to develop responsive and user-friendly applications.
              I have worked on projects such as an e-commerce
              website, a bulk mail application, a weather app,
              and other web applications.
            </p>

            <p>
              I enjoy learning new technologies, solving problems,
              and improving my coding skills through practical
              projects. My goal is to grow as a Full Stack Developer
              and contribute to real-world software projects.
            </p>

            {/* Technical Skills */}
            <div className="about-skills">
              <h3>Technical Skills</h3>

              <div className="education-skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Git & GitHub</span>
              </div>
            </div>
          </div>

          {/* Education and Training */}
          <div className="about-education">
            <h3>🎓 Education & Training</h3>

            {/* School */}
            <div className="education-card">
              <span className="education-icon">🏫</span>

              <div>
                <h4>Higher Secondary (HSC)</h4>

                <p>
                  Thiru S. Devaraj Government Higher Secondary School
                </p>

                <span>
                  Thiruparkadal, Ranipet District, Tamil Nadu
                </span>
              </div>
            </div>

            {/* College */}
            <div className="education-card">
              <span className="education-icon">🎓</span>

              <div>
                <h4>B.Sc. Computer Science</h4>

                <p>Voorhees College, Vellore, Tamil Nadu</p>

                <span>Coursework Completed</span>
              </div>
            </div>

            {/* Bootcamp */}
            <div className="education-card">
              <span className="education-icon">💻</span>

              <div>
                <h4>MERN Stack Development Bootcamp</h4>

                <p>Error Makes Clever (EMC)</p>

                <span>4 Months Training</span>

                <div className="education-skills">
                  <span>MongoDB</span>
                  <span>Express.js</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 
