import { Link, useLocation } from "react-router-dom";

const approachLinks = [
  { label: "Behavioural & Leadership Training", path: "/approach/leadership-training" },
  { label: "Organizational Development", path: "/approach/organizational-development" },
  { label: "HR Practices & Policies", path: "/approach/hr-practices" },
  { label: "Operational Excellence", path: "/approach/operational-excellence" },
  { label: "Process Automation & Tech", path: "/approach/process-automation" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Our Approach", path: "/approach", children: approachLinks },
  { label: "Our Team", path: "/team" },
  { label: "Clients", path: "/clients" },
];

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top" style={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(255,255,255,0.95)" }}>
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--vinciva-navy)" }}>
          Vinciva
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.path} className="nav-item dropdown">
                  <Link
                    to={link.path}
                    className={`nav-link dropdown-toggle ${isActive(link.path) ? "text-gold fw-semibold" : ""}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {link.label}
                  </Link>
                  <ul className="dropdown-menu">
                    {link.children.map((child) => (
                      <li key={child.path}>
                        <Link to={child.path} className={`dropdown-item ${isActive(child.path) ? "active" : ""}`}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.path} className="nav-item">
                  <Link to={link.path} className={`nav-link ${isActive(link.path) ? "text-gold fw-semibold" : ""}`}>
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link to="/contact" className="btn btn-gold">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
