import { FC } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export const MainLayout: FC = () => {
  return (
    <main>
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "active" : ""} nav-link`
                  }
                >
                  Catálogo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/dados"
                  className={({ isActive }) =>
                    `${isActive ? "active" : ""} nav-link`
                  }
                >
                  Novo
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container py-4">
        <Outlet />
      </div>
    </main>
  );
};
