import PageHero from "@/components/shared/PageHero";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => (
  <main>
    <PageHero title="Contact Us" subtitle="Whether you're scaling, restructuring, or realigning, Vinciva is your trusted partner." />

    <section className="section-padding">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-5">
            <h4 className="fw-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Get in Touch</h4>
            <ul className="list-unstyled small">
              <li className="mb-3">
                <a href="tel:+1234567890" className="text-decoration-none text-muted d-flex align-items-center gap-2">
                  <Phone size={20} className="text-gold" /> +1 (234) 567-890
                </a>
              </li>
              <li className="mb-3">
                <a href="mailto:info@vinciva.com" className="text-decoration-none text-muted d-flex align-items-center gap-2">
                  <Mail size={20} className="text-gold" /> info@vinciva.com
                </a>
              </li>
              <li className="d-flex align-items-start gap-2 text-muted">
                <MapPin size={20} className="text-gold mt-1" /> Your City, Country
              </li>
            </ul>
          </div>
          <div className="col-md-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Your Message" rows={4} />
              </div>
              <button type="submit" className="btn btn-gold w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Contact;
