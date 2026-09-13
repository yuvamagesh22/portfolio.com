import { useState } from "react";
 

function skills() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Machine Learning",
      skills: [
        "Linear Regression",
        "Decision Tree",
        "Random Forest",
        "K-Nearest Neighbors",
      ],
    },
    {
      id: 2,
      title: "Computer Vision",
      skills: [
        "Image Classification",
        "CNN",
        "Image Preprocessing",
        "Object Detection",
      ],
    },
    {
      id: 3,
      title: "Programming Proficiency",
      skills: [
        "Python",
        "Java",
        "C++",
        "SQL",
      ],
    },
    {
      id: 4,
      title: "Other Technologies",
      skills: [
        "React",
        "FastAPI",
        "Git & GitHub",
        "REST API",
      ],
    },
  ]);

  const [openMenu, setOpenMenu] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const [newSkill, setNewSkill] = useState({});
  const [showSkillInput, setShowSkillInput] = useState(null);

  // DELETE CATEGORY
  const deleteCategory = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this skill category?"
    );

    if (!confirmDelete) return;

    setCategories(
      categories.filter((category) => category.id !== id)
    );

    setOpenMenu(null);
  };

  // START EDIT
  const startEdit = (category) => {
    setEditingId(category.id);
    setEditTitle(category.title);
    setOpenMenu(null);
  };

  // SAVE EDIT
  const saveEdit = (id) => {
    if (!editTitle.trim()) return;

    setCategories(
      categories.map((category) =>
        category.id === id
          ? { ...category, title: editTitle }
          : category
      )
    );

    setEditingId(null);
    setEditTitle("");
  };

  // ADD SKILL
  const addSkill = (id) => {
    const skill = newSkill[id]?.trim();

    if (!skill) return;

    setCategories(
      categories.map((category) =>
        category.id === id
          ? {
              ...category,
              skills: [...category.skills, skill],
            }
          : category
      )
    );

    setNewSkill({
      ...newSkill,
      [id]: "",
    });

    setShowSkillInput(null);
  };

  // DELETE INDIVIDUAL SKILL
  const deleteSkill = (categoryId, skillIndex) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              skills: category.skills.filter(
                (_, index) => index !== skillIndex
              ),
            }
          : category
      )
    );
  };

  return (
    <section className="skills-section">

      <div className="skills-heading">
        <p className="section-label">SKILLS</p>

        <h2>Technical Skills</h2>

        <p>
          Technologies and concepts I'm learning and working with.
        </p>
      </div>

      <div className="skills-grid">

        {categories.map((category) => (

          <div className="skill-card" key={category.id}>

            <div className="skill-card-header">

              {editingId === category.id ? (

                <div className="edit-title-box">

                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) =>
                      setEditTitle(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveEdit(category.id);
                      }
                    }}
                    autoFocus
                  />

                  <button
                    onClick={() =>
                      saveEdit(category.id)
                    }
                  >
                    Save
                  </button>

                </div>

              ) : (

                <h3>{category.title}</h3>

              )}

              <div className="menu-container">

                <button
                  className="three-dot-btn"
                  onClick={() =>
                    setOpenMenu(
                      openMenu === category.id
                        ? null
                        : category.id
                    )
                  }
                >
                  ⋮
                </button>

                {openMenu === category.id && (

                  <div className="skill-menu">

                    <button
                      onClick={() =>
                        startEdit(category)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-option"
                      onClick={() =>
                        deleteCategory(category.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                )}

              </div>

            </div>

            <div className="skill-list">

              {category.skills.map((skill, index) => (

                <div
                  className="skill-item"
                  key={index}
                >

                  <span>{skill}</span>

                  <button
                    className="delete-skill"
                    onClick={() =>
                      deleteSkill(
                        category.id,
                        index
                      )
                    }
                  >
                    ×
                  </button>

                </div>

              ))}

            </div>

            {showSkillInput === category.id ? (

              <div className="add-skill-form">

                <input
                  type="text"
                  placeholder="Enter skill..."
                  value={newSkill[category.id] || ""}
                  onChange={(e) =>
                    setNewSkill({
                      ...newSkill,
                      [category.id]: e.target.value,
                    })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addSkill(category.id);
                    }
                  }}
                  autoFocus
                />

                <button
                  onClick={() =>
                    addSkill(category.id)
                  }
                >
                  Add
                </button>

              </div>

            ) : (

              <button
                className="add-skill-btn"
                onClick={() =>
                  setShowSkillInput(category.id)
                }
              >
                + Add Skill
              </button>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default skills;