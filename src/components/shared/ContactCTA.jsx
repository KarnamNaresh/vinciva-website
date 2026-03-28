import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactCTA = () => (
  <section className="gradient-navy text-white section-padding">
    <div className="container text-center">
      <h2 className="fw-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Begin Your Organizational Transformation Today
      </h2>
      <p className="opacity-75 mb-4">
        To learn how we can support your organization's strategic objectives, please contact us.
      </p>
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-4 small opacity-75">
        <span className="d-flex align-items-center gap-2"><Phone size={16} className="text-gold" /> +1 (234) 567-890</span>
        <span className="d-flex align-items-center gap-2"><Mail size={16} className="text-gold" /> info@vinciva.com</span>
        <span className="d-flex align-items-center gap-2"><MapPin size={16} className="text-gold" /> Your City</span>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
        <Link to="/contact" className="btn btn-gold">Contact Us</Link>
        <Link to="/contact" className="btn-outline-light-custom">Schedule a Strategy Call</Link>
      </div>
    </div>
  </section>
);

export default ContactCTA;
