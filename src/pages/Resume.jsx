import { useState } from "react";
 

function Resume() {
  const [resume, setResume] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewingResume, setViewingResume] = useState(null);

  // Upload Resume
  const uploadResume = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF resume.");
      return;
    }

    const resumeURL = URL.createObjectURL(file);

    setResume({
      name: file.name,
      url: resumeURL,
    });
  };

  // View Resume
  const viewResume = () => {
    if (!resume) return;

    setViewingResume(resume);
    setMenuOpen(false);
  };

  // Delete Resume
  const deleteResume = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your resume?"
    );

    if (!confirmDelete) return;

    URL.revokeObjectURL(resume.url);

    setResume(null);
    setMenuOpen(false);
  };

  return (
    <section className="resume-section">

      <div className="resume-heading">
        <p className="section-label">RESUME</p>

        <h2>My Resume</h2>

        <p>
          Upload and manage my latest resume.
        </p>
      </div>

      {/* UPLOAD BUTTON */}

      {!resume && (
        <label className="upload-resume-btn">
          + Upload Resume

          <input
            type="file"
            accept=".pdf,application/pdf"
            onChange={uploadResume}
          />
        </label>
      )}

      {/* RESUME CARD */}

      {resume && (
        <div className="resume-card">

          <div className="resume-icon">
            📄
          </div>

          <div className="resume-info">
            <h3>{resume.name}</h3>
            <p>PDF Resume</p>
          </div>

          {/* THREE DOT MENU */}

          <div className="resume-menu-container">

            <button
              className="resume-three-dot"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
            >
              ⋮
            </button>

            {menuOpen && (
              <div className="resume-menu">

                <button onClick={viewResume}>
                  View
                </button>

                <button
                  className="resume-delete"
                  onClick={deleteResume}
                >
                  Delete
                </button>

              </div>
            )}

          </div>

        </div>
      )}

      {viewingResume && (
        <div
          className="resume-view-overlay"
          onClick={() => setViewingResume(null)}
        >
          <div
            className="resume-view-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="resume-view-close"
              onClick={() => setViewingResume(null)}
              aria-label="Close resume preview"
            >
              ×
            </button>

            <div className="resume-view-header">
              <div className="resume-view-icon">📄</div>

              <div>
                <p className="section-label">RESUME PREVIEW</p>
                <h3>{viewingResume.name}</h3>
              </div>
            </div>

            <iframe
              src={viewingResume.url}
              title="Resume PDF Preview"
              className="resume-pdf-viewer"
            />
          </div>
        </div>
      )}

    </section>
  );
}

export default Resume;