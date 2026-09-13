import { useState } from "react";
 

function Achievements() {
  const [certificates, setCertificates] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const addCertificate = () => {
    if (!name || !organization || !description) {
      alert("Please fill all required fields.");
      return;
    }

    const newCertificate = {
      id: Date.now(),
      name,
      organization,
      description,
      image,
    };

    setCertificates([...certificates, newCertificate]);

    setName("");
    setOrganization("");
    setDescription("");
    setImage(null);
    setShowForm(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <section className="certificates-section">

      <div className="section-heading">
        <p className="section-label">ACHIEVEMENTS</p>
        <h2>Certificates & Competitions</h2>
        <p className="section-description">
          Certificates, competitions and achievements.
        </p>
      </div>

      <button
        className="add-certificate-btn"
        onClick={() => setShowForm(!showForm)}
      >
        + Add Certificate
      </button>

      {showForm && (
        <div className="certificate-form">

          <input
            type="text"
            placeholder="Certificate / Competition Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Organization / College"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />

          <textarea
            placeholder="Write about this achievement in 2–3 lines..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />

          <label className="upload-label">
            Upload Certificate
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>

          {image && (
            <img
              src={image}
              alt="Certificate preview"
              className="certificate-preview"
            />
          )}

          <div className="form-buttons">
            <button onClick={addCertificate}>
              Add Certificate
            </button>

            <button
              className="cancel-btn"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>

        </div>
      )}

      <div className="certificates-grid">

        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>

            {certificate.image && (
              <img
                src={certificate.image}
                alt={certificate.name}
                className="certificate-image"
              />
            )}

            <div className="certificate-content">

              <h3>{certificate.name}</h3>

              <p className="certificate-organization">
                {certificate.organization}
              </p>

              <p className="certificate-description">
                {certificate.description}
              </p>

              {certificate.image && (
                <button
                  className="view-certificate"
                  onClick={() =>
                    window.open(certificate.image, "_blank")
                  }
                >
                  View Certificate ↗
                </button>
              )}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Achievements;