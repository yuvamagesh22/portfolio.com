
import { useState } from "react";
 

function Projects() {
  const [projects, setProjects] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    technologies: "",
    contribution: "",
    github: "",
    live: "",
    status: "Completed",
    image: null,
    video: null,
  });

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle project image
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setForm({
        ...form,
        image: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  // Handle project video
  const handleVideo = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setForm({
        ...form,
        video: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  // Add project
  const addProject = (e) => {
    e.preventDefault();

    if (!form.title || !form.description) {
      alert("Please enter the project name and description.");
      return;
    }

    setProjects((prevProjects) => [...prevProjects, form]);

    setForm({
      title: "",
      description: "",
      technologies: "",
      contribution: "",
      github: "",
      live: "",
      status: "Completed",
      image: null,
      video: null,
    });

    setShowForm(false);
  };

  return (
    <section className="projects-section" id="projects">

      <div className="projects-container">

        {/* Heading */}

        <div className="projects-heading">

          <div>
            <p className="section-label">MY PROJECTS</p>

            <h2>
              Things I've
              <span> built.</span>
            </h2>

            <p className="projects-description">
              A collection of projects where I turn ideas, concepts,
              and technologies into practical applications.
            </p>
          </div>

          <button
            className="add-project-btn"
            onClick={() => setShowForm(!showForm)}
          >
            + Add Project
          </button>

        </div>


        {/* Add Project Form */}

        {showForm && (
          <form className="project-form" onSubmit={addProject}>

            <div className="form-header">

              <h3>Add Project</h3>

              <button
                type="button"
                onClick={() => setShowForm(false)}
              >
                ×
              </button>

            </div>


            <div className="form-grid">

              {/* Project Name */}

              <div className="form-group">

                <label>Project Name</label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Rice Crop Advisory AI"
                />

              </div>


              {/* Status */}

              <div className="form-group">

                <label>Project Status</label>

                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option>Completed</option>
                  <option>In Development</option>
                  <option>Ongoing</option>
                  <option>Prototype</option>
                </select>

              </div>


              {/* Description */}

              <div className="form-group full-width">

                <label>Project Description</label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="What does this project do?"
                  rows="4"
                ></textarea>

              </div>


              {/* Technologies */}

              <div className="form-group full-width">

                <label>Technologies Used</label>

                <input
                  type="text"
                  name="technologies"
                  value={form.technologies}
                  onChange={handleChange}
                  placeholder="Python, React, FastAPI, TensorFlow"
                />

              </div>


              {/* Contribution */}

              <div className="form-group full-width">

                <label>My Contribution</label>

                <textarea
                  name="contribution"
                  value={form.contribution}
                  onChange={handleChange}
                  placeholder="What did you personally work on?"
                  rows="3"
                ></textarea>

              </div>


              {/* GitHub */}

              <div className="form-group">

                <label>GitHub URL</label>

                <input
                  type="url"
                  name="github"
                  value={form.github}
                  onChange={handleChange}
                  placeholder="https://github.com/..."
                />

              </div>


              {/* Live Demo */}

              <div className="form-group">

                <label>Live Demo URL</label>

                <input
                  type="url"
                  name="live"
                  value={form.live}
                  onChange={handleChange}
                  placeholder="https://..."
                />

              </div>


              {/* Image */}

              <div className="form-group">

                <label>Project Image</label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                />

              </div>


              {/* Video */}

              <div className="form-group">

                <label>Project Demo Video</label>

                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideo}
                />

              </div>

            </div>


            <button
              type="submit"
              className="save-project-btn"
            >
              Add Project
            </button>

          </form>
        )}


        {/* Project Cards */}

        <div className="projects-grid">

          {projects.length === 0 ? (
            <p className="no-projects-message">No projects added yet.</p>
          ) : (
            projects.map((project, index) => (

            <div className="project-card" key={index}>

              {/* Media */}

              <div className="project-media">

                {project.video ? (

                  <video
                    src={project.video}
                    controls
                  />

                ) : project.image ? (

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                ) : (

                  <div className="project-placeholder">
                    <span>🚀</span>
                    <p>Project Preview</p>
                  </div>

                )}

              </div>


              {/* Project Content */}

              <div className="project-content">

                <div className="project-title-row">

                  <h3>{project.title}</h3>

                  <span className="project-status">
                    {project.status}
                  </span>

                </div>


                <p className="project-description">
                  {project.description}
                </p>


                {/* Technologies */}

                {project.technologies && (

                  <div className="project-technologies">

                    {project.technologies
                      .split(",")
                      .map((technology, i) => (

                        <span key={i}>
                          {technology.trim()}
                        </span>

                      ))}

                  </div>

                )}


                {/* Contribution */}

                {project.contribution && (

                  <div className="project-contribution">

                    <strong>My Contribution</strong>

                    <p>{project.contribution}</p>

                  </div>

                )}


                {/* Links */}

                <div className="project-links">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}

                </div>

              </div>

            </div>

            ))
          )}

        </div>

      </div>

    </section>
  );
}

export default Projects;

