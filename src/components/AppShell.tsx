import { NavLink, Outlet } from "react-router-dom";

export function AppShell() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/" aria-label="Integration Discovery home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Integration Discovery</span>
        </NavLink>
        <nav className="topbar-nav" aria-label="Primary navigation">
          <NavLink to="/" end>
            Projects
          </NavLink>
          <span className="version">v2 foundation</span>
        </nav>
      </header>

      <Outlet />

      <footer>
        <span>Integration Discovery</span>
        <span>Foundation only — no customer data is processed here.</span>
      </footer>
    </div>
  );
}
