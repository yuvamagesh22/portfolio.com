 
import { useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([
    {
      title: "Python Course",
      organization: "Online Learning",
      date: "2026",
      skills: "Python, Programming",
      description: "Learning Python programming and problem solving.",
      certificate: null,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [menuOpenIndex, setMenuOpenIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [form, setForm] = useState({
    title: "",
    organization: "",
    date: "",
    skills: "",
    description: "",
    certificate: null,
  });

  const resetForm = () => {
    setForm({
      title: "",
      organization: "",
      date: "",
      skills: "",
      description: "",
      certificate: null,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCertificate = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setForm({
          ...form,
          certificate: reader.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleViewCourse = (course) => {
    setMenuOpenIndex(null);
    setSelectedCourse(course);
  };

  const handleEditCourse = (index) => {
    setEditingIndex(index);
    setForm(courses[index]);
    setShowForm(true);
    setMenuOpenIndex(null);
  };

  const handleDeleteCourse = (index) => {
    setCourses((prevCourses) => prevCourses.filter((_, i) => i !== index));
    setMenuOpenIndex(null);

    if (editingIndex === index) {
      setEditingIndex(null);
      resetForm();
      setShowForm(false);
    }
  };

  const addCourse = (e) => {
    e.preventDefault();

    if (!form.title || !form.organization) {
      alert("Please enter the course name and organization.");
      return;
    }

    if (editingIndex !== null) {
      setCourses((prevCourses) =>
        prevCourses.map((course, index) =>
          index === editingIndex ? form : course
        )
      );
    } else {
      setCourses((prevCourses) => [...prevCourses, form]);
    }

    resetForm();
    setEditingIndex(null);
    setShowForm(false);
  };

  return (
    <section className="courses-section" id="courses">

      <div className="courses-container">

        {/* Heading */}
        <div className="courses-heading">

          <div>
            <p className="section-label">COURSES & CERTIFICATES</p>

            <h2>
              Learning that
              <span> builds my skills.</span>
            </h2>

            <p className="courses-description">
              Courses and certifications I've completed while continuously
              developing my technical knowledge.
            </p>
          </div>

          <button
            className="add-course-btn"
            onClick={() => {
              setEditingIndex(null);
              resetForm();
              setShowForm(!showForm);
            }}
          >
            + Add Course
          </button>

        </div>

        {/* Add Course Form */}

        {showForm && (
          <form className="course-form" onSubmit={addCourse}>

            <div className="form-header">
              <h3>Add Course</h3>

              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingIndex(null);
                  resetForm();
                }}
              >
                ×
              </button>
            </div>

            <div className="form-grid">

              <div className="form-group">
                <label>Course Name</label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Python for Beginners"
                />
              </div>

              <div className="form-group">
                <label>Platform / Organization</label>

                <input
                  type="text"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="e.g. Coursera"
                />
              </div>

              <div className="form-group">
                <label>Completion Date</label>

                <input
                  type="month"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Skills / Topics</label>

                <input
                  type="text"
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  placeholder="Python, SQL, ML"
                />
              </div>

              <div className="form-group full-width">
                <label>Description</label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Briefly describe what you learned..."
                  rows="3"
                ></textarea>
              </div>

              <div className="form-group full-width">
                <label>Certificate</label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCertificate}
                />
              </div>

            </div>

            <button className="save-course-btn" type="submit">
              {editingIndex !== null ? "Save Changes" : "Add Course"}
            </button>

          </form>
        )}

        {/* Course Cards */}

        <div className="courses-grid">

          {courses.map((course, index) => (

            <div className="course-card" key={index}>

              <div className="course-card-header">

                <div className="course-top">

                  <div className="course-icon">
                    🎓
                  </div>

                  <div>
                    <h3>{course.title}</h3>

                    <p>{course.organization}</p>
                  </div>

                </div>

                <div className="course-menu-wrapper">
                  <button
                    type="button"
                    className="course-menu-btn"
                    onClick={() =>
                      setMenuOpenIndex(menuOpenIndex === index ? null : index)
                    }
                    aria-label={`Open actions for ${course.title}`}
                  >
                    ⋮
                  </button>

                  {menuOpenIndex === index && (
                    <div className="course-menu">
                      <button type="button" onClick={() => handleViewCourse(course)}>
                        View
                      </button>
                      <button type="button" onClick={() => handleEditCourse(index)}>
                        Edit
                      </button>
                      <button type="button" onClick={() => handleDeleteCourse(index)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>

              </div>

              {course.date && (
                <div className="course-date">
                  {course.date}
                </div>
              )}

              {course.skills && (
                <div className="course-skills">

                  {course.skills
                    .split(",")
                    .map((skill, i) => (
                      <span key={i}>
                        {skill.trim()}
                      </span>
                    ))}

                </div>
              )}

              {course.description && (
                <p className="course-description">
                  {course.description}
                </p>
              )}

              {course.certificate && (
                <button
                  className="certificate-btn"
                  onClick={() =>
                    window.open(course.certificate, "_blank")
                  }
                >
                  View Certificate ↗
                </button>
              )}

            </div>

          ))}

        </div>

        {selectedCourse && (
          <div
            className="course-view-overlay"
            onClick={() => setSelectedCourse(null)}
          >
            <div
              className="course-view-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="course-view-close"
                onClick={() => setSelectedCourse(null)}
                aria-label="Close course details"
              >
                ×
              </button>

              <div className="course-view-content">
                <div className="course-view-header">
                  <div className="course-view-icon">🎓</div>

                  <div>
                    <p className="section-label">COURSE DETAILS</p>
                    <h3>{selectedCourse.title}</h3>
                  </div>
                </div>

                <div className="course-view-details">
                  <div className="course-view-row">
                    <strong>Organization:</strong>
                    <span>{selectedCourse.organization}</span>
                  </div>

                  {selectedCourse.date && (
                    <div className="course-view-row">
                      <strong>Completion Date:</strong>
                      <span>{selectedCourse.date}</span>
                    </div>
                  )}

                  {selectedCourse.skills && (
                    <div className="course-view-row">
                      <strong>Skills:</strong>
                      <span>{selectedCourse.skills}</span>
                    </div>
                  )}

                  {selectedCourse.description && (
                    <div className="course-view-row description-row">
                      <strong>Description:</strong>
                      <span>{selectedCourse.description}</span>
                    </div>
                  )}
                </div>

                {selectedCourse.certificate && (
                  <div className="course-view-certificate">
                    <strong>Certificate</strong>
                    <img
                      src={selectedCourse.certificate}
                      alt={`${selectedCourse.title} certificate`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}

export default Courses;

