

function Internships() {

  const internships = [
    {
      role: "Software Testing Intern",
      company: "Supreme Soft",
      period: "Internship",
      description:
        "Gained practical exposure to software testing, test case preparation, debugging, and software quality processes.",
      skills: ["Software Testing", "Test Cases", "Debugging"],
    },

    {
      role: "Java Programming Intern",
      company: "CodeSoft",
      period: "Internship",
      description:
        "Worked on Java programming concepts, object-oriented programming, and problem-solving through practical tasks.",
      skills: ["Java", "OOP", "Problem Solving"],
    },

    {
      role: "Digital Marketing Intern",
      company: "Rapsys Info Tech",
      period: "Internship",
      description:
        "Gained practical understanding of digital marketing, online promotion, content, and digital engagement.",
      skills: ["Digital Marketing", "Content", "Online Promotion"],
    },
  ];

  return (
    <section className="internships-section" id="experience">

      <div className="internships-container">

        {/* Heading */}

        <div className="internships-heading">

          <p className="section-label">
            EXPERIENCE
          </p>

          <h2>
            Where I gained
            <span> practical experience.</span>
          </h2>

          <p className="internships-description">
            Internship experiences that helped me connect academic
            knowledge with real-world work environments.
          </p>

        </div>

        {/* Timeline */}

        <div className="timeline">

          {internships.map((internship, index) => (

            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <div className="experience-top">

                  <div>
                    <h3>{internship.role}</h3>

                    <h4>{internship.company}</h4>
                  </div>

                  <span className="experience-type">
                    {internship.period}
                  </span>

                </div>

                <p className="experience-description">
                  {internship.description}
                </p>

                <div className="experience-skills">

                  {internship.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Internships;
