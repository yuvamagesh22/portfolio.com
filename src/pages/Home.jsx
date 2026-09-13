
function Home() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="hero-small">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Yuvarani M</span>
        </h1>

        <h2>Computer Science & Engineering Student</h2>

        <p className="hero-description">
          I am passionate about Full Stack Development, Artificial Intelligence,
          Machine Learning, Computer Vision and Natural Language Processing.
        </p>

        <div className="hero-buttons">
          <a href="/projects" className="primary-btn">
            Explore My Work
          </a>

          <a href="/resume" className="secondary-btn">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;