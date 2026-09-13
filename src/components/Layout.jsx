import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

function Layout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={`portfolio-layout ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      {sidebarCollapsed ? (
        <button
          type="button"
          className="sidebar-open"
          onClick={() => setSidebarCollapsed(false)}
          title="Open sidebar"
          aria-label="Open sidebar"
        >
          ☰
        </button>
      ) : (
        <Sidebar onClose={() => setSidebarCollapsed(true)} />
      )}

      <main className="main-content">

        <header className="top-bar">
          <div>
            <strong>My Portfolio</strong>
          </div>

          <div className="user-info">
            Yuvarani M 👋
          </div>
        </header>

        <div className="page-content">
          <Outlet />
        </div>

      </main>

      <div className="layout-bottom-left">
        <p>© 2026 Yuvarani M. All rights reserved.</p>
      </div>

      <div className="floating-socials">
        <a
          href="https://github.com/yuvamagesh22"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-social-link"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.58.11.79-.25.79-.56v-1.96c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.4.97.1-.76.4-1.28.73-1.57-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .98-.32 3.2 1.18a11.08 11.08 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.68.41.36.78 1.08.78 2.18v3.24c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/yuvarani-mageswaran-857714331"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-social-link"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.3 3H4.7C3.8 3 3 3.8 3 4.7v14.6c0 .9.8 1.7 1.7 1.7h14.6c.9 0 1.7-.8 1.7-1.7V4.7c0-.9-.8-1.7-1.7-1.7ZM8.3 18.1h-2.6V9.4h2.6v8.7ZM7.1 8.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5ZM18.1 18.1h-2.6v-4.1c0-1-.1-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v4.2h-2.6V9.4h2.5v1.1h.1c.3-.6 1.2-1.3 2.6-1.3 2.8 0 3.3 1.8 3.3 4.1v4.8h.1Z" />
          </svg>
        </a>

        <a
          href="https://wa.me/919840130280"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-social-link"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.11 4.89A9.77 9.77 0 0 0 12.03 2C6.49 2 2 6.48 2 12.04c0 1.7.45 3.37 1.31 4.83L2 22l5.28-1.39a9.9 9.9 0 0 0 4.75 1.17h.01c5.54 0 10.03-4.48 10.03-10.02 0-2.68-1.04-5.2-2.96-7.08Zm-7.08 15.45h-.01c-1.54 0-3.07-.41-4.4-1.19l-.32-.19-3.13.82.84-3.05-.21-.32A8.09 8.09 0 0 1 3.97 12c0-4.47 3.63-8.1 8.09-8.1 2.16 0 4.19.84 5.72 2.37a8.02 8.02 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09Zm4.45-6.07c-.24-.12-1.43-.71-1.66-.79-.23-.08-.39-.12-.56.12-.17.24-.65.79-.8.95-.14.17-.3.19-.54.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.3.36-.45.12-.15.16-.26.24-.43.08-.17.04-.32-.02-.45-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.14 0 1.26.93 2.48.06 3.74.93 1.57 2.19 2.56 3.76 2.86.47.08.9.14 1.26.14.47 0 .9-.06 1.32-.18.4-.12.95-.39 1.08-.76.13-.37.13-.68.09-.76-.05-.08-.2-.12-.43-.24Z" />
          </svg>
        </a>

        <a
          href="mailto:yuvamagesh22@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-social-link"
          aria-label="Email"
          title="Email"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.75 6.8 5.08L18.8 6H5.2Zm14.05 1.26-6.74 5.04a1 1 0 0 1-1.22 0L4.75 7.01v10.24c0 .41.34.75.75.75h12.99c.41 0 .75-.34.75-.75V7.01Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Layout;