import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="gradient-navy text-white">
    <div className="container section-padding">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h3 className="fs-5 fw-bold mb-3 text-gold-light" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Vinciva</h3>
          <p className="small opacity-75">
            Empowering organizations. Elevating performance. Your strategic partner in organizational transformation.
          </p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="small fw-semibold text-uppercase text-gold mb-3" style={{ letterSpacing: "0.1em" }}>Quick Links</h4>
          <ul className="list-unstyled">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "Our Approach", path: "/approach" },
              { label: "Our Team", path: "/team" },
              { label: "Clients", path: "/clients" },
            ].map((l) => (
              <li key={l.path} className="mb-1">
                <Link to={l.path} className="text-decoration-none text-white-50 small" style={{ transition: "opacity 0.2s" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="small fw-semibold text-uppercase text-gold mb-3" style={{ letterSpacing: "0.1em" }}>Services</h4>
          <ul className="list-unstyled small opacity-75">
            <li className="mb-1">Organizational Development</li>
            <li className="mb-1">Leadership Training</li>
            <li className="mb-1">Operational Excellence</li>
            <li className="mb-1">HR Advisory</li>
            <li className="mb-1">Process Automation</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="small fw-semibold text-uppercase text-gold mb-3" style={{ letterSpacing: "0.1em" }}>Contact</h4>
          <ul className="list-unstyled small">
            <li className="mb-2">
              <a href="tel:+1234567890" className="text-decoration-none text-white-50 d-flex align-items-center gap-2">
                <Phone size={16} className="text-gold" /> +1 (234) 567-890
              </a>
            </li>
            <li className="mb-2">
              <a href="mailto:info@vinciva.com" className="text-decoration-none text-white-50 d-flex align-items-center gap-2">
                <Mail size={16} className="text-gold" /> info@vinciva.com
              </a>
            </li>
            <li className="d-flex align-items-start gap-2 opacity-75">
              <MapPin size={16} className="text-gold mt-1" /> Your City, Country
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-light opacity-10 mt-5 mb-4" />
      <p className="text-center small opacity-50 mb-0">
        © {new Date().getFullYear()} Vinciva. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
