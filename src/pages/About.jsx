

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <div className="about-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            I'm Yuvarani M — a CSE student
            <span> who learns by building.</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="about-content">

          {/* Introduction */}
          <div className="about-text">
            <p>
              I'm a Computer Science and Engineering student specializing
              in <strong>Full Stack Computing</strong>, with a strong interest
              in <strong>AI, Computer Vision, NLP, and Web Development.</strong>
            </p>

            <p>
              I enjoy turning what I learn into practical projects that
              solve real-world problems. I work mainly with
              <strong> Python, Machine Learning, React, FastAPI, SQL,
              and Computer Vision.</strong>
            </p>

            <p>
              I continuously improve my programming and problem-solving
              skills through hands-on projects, coding practice, and
              exploring emerging technologies.
            </p>
          </div>

          {/* Areas of Interest */}
          <div className="interest-section">

            <h3>What I'm currently exploring</h3>

            <div className="interest-grid">

              <div className="interest-card">
                <h4>AI & Machine Learning</h4>
                <p>Building intelligent solutions using ML.</p>
              </div>

              <div className="interest-card">
                <h4>Computer Vision</h4>
                <p>Working with image-based AI applications.</p>
              </div>

              <div className="interest-card">
                <h4>Natural Language Processing</h4>
                <p>Exploring AI that understands human language.</p>
              </div>

              <div className="interest-card">
                <h4>Full Stack Development</h4>
                <p>Creating complete and user-focused web applications.</p>
              </div>

            </div>

          </div>

        </div>

        {/* Approach */}
        <div className="approach">

          <p className="approach-label">MY APPROACH</p>

          <div className="approach-flow">
            <span>Learn</span>
            <b>→</b>
            <span>Build</span>
            <b>→</b>
            <span>Experiment</span>
            <b>→</b>
            <span>Improve</span>
          </div>

          <p className="goal">
            My goal is to grow into a <strong>software and AI engineer</strong>
            who can transform ideas into useful, reliable, and
            user-focused applications.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;