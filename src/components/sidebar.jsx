import { NavLink } from "react-router-dom";

function Sidebar({ onClose }) {
  return (
    <aside className="sidebar">
      <button
        type="button"
        className="sidebar-close"
        onClick={onClose}
        title="Close sidebar"
        aria-label="Close sidebar"
      >
        ×
      </button>

      <nav className="sidebar-menu">
        <NavLink to="/home">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-8.5Z"/></svg>
          </span>
          <span>Home</span>
        </NavLink>
        <NavLink to="/about">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0"/></svg>
          </span>
          <span>About Me</span>
        </NavLink>
        <NavLink to="/skills">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M9 18h6M10 3h4l1 5-2 2-2-2-1-5Zm-6 9 2 2 2-2m8 0 2 2 2-2M12 12v6"/></svg>
          </span>
          <span>Skills</span>
        </NavLink>
        <NavLink to="/resume">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M7 3.5h7l5 5V19a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 19V5A1.5 1.5 0 0 1 7.5 3.5Z"/><path d="M14 3.5v5h5M9 13h6M9 17h6"/></svg>
          </span>
          <span>Resume</span>
        </NavLink>
        <NavLink to="/projects">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="m8 8 8 8M8 16l8-8M5 18a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5Z"/></svg>
          </span>
          <span>Projects</span>
        </NavLink>
        <NavLink to="/internship">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M7 7V5.5A1.5 1.5 0 0 1 8.5 4h7A1.5 1.5 0 0 1 17 5.5V7M5 7h14v11.5A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5V7Z"/><path d="M9 11h6"/></svg>
          </span>
          <span>Internship</span>
        </NavLink>
        <NavLink to="/courses">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M4 8.5 12 5l8 3.5-8 3.5L4 8.5Zm0 0v6.5L12 18l8-3V8.5M12 18v-6"/></svg>
          </span>
          <span>Courses</span>
        </NavLink>
        <NavLink to="/achievements">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 4h8v3.5A4.5 4.5 0 0 1 11.5 12H12a4.5 4.5 0 0 1 4.5-4.5V4h1.5A1.5 1.5 0 0 1 19.5 5.5v2A3.5 3.5 0 0 1 16 11.1V14a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4v-2.9A3.5 3.5 0 0 1 4.5 7.5v-2A1.5 1.5 0 0 1 6 4h1.5V4Z"/><path d="M10 18h4"/></svg>
          </span>
          <span>Achievements</span>
        </NavLink>
        <NavLink to="/contact">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Zm0 0 8 6 8-6"/></svg>
          </span>
          <span>Contact</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <button>
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 3.5v3M12 17.5v3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M3.5 12h3M17.5 12h3M5.5 18.5l2.1-2.1M16.4 7.6l2.1-2.1"/></svg>
          </span>
          <span>Settings</span>
        </button>
        <button title="Logout">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M10 17v1.5A1.5 1.5 0 0 0 11.5 20h6A1.5 1.5 0 0 0 19 18.5v-13A1.5 1.5 0 0 0 17.5 4h-6A1.5 1.5 0 0 0 10 5.5V7M14 12H4m0 0 3-3m-3 3 3 3"/></svg>
          </span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;