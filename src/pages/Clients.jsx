import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/shared/ContactCTA";
import SectionHeading from "@/components/shared/SectionHeading";
import { Building2, Quote } from "lucide-react";

const clientLogos = Array.from({ length: 8 }, (_, i) => `Client ${i + 1}`);

const testimonials = [
  { quote: "Vinciva transformed our leadership pipeline. Their approach is deeply human yet incredibly structured.", author: "CEO", org: "Leading Manufacturing Firm" },
  { quote: "The 5i Model brought clarity and focus to our change management journey. Highly recommend.", author: "CHRO", org: "Technology Services Company" },
  { quote: "Their HR advisory helped us build policies that our teams actually embrace. Outstanding work.", author: "VP – HR", org: "Financial Services" },
];

const Clients = () => (
  <main>
    <PageHero title="Our Clients" subtitle="We are proud to partner with organizations across industries, delivering transformation that sticks." />

    <section className="section-padding">
      <div className="container">
        <SectionHeading label="Trusted By" title="Organizations We've Partnered With" />
        <div className="row g-3">
          {clientLogos.map((c, i) => (
            <div key={i} className="col-6 col-sm-3">
              <div className="d-flex flex-column align-items-center justify-content-center rounded-3 border bg-light text-muted" style={{ height: "6rem" }}>
                <Building2 size={24} />
                <span className="small fw-medium mt-1">{c}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-section-alt">
      <div className="container">
        <SectionHeading label="Testimonials" title="What Our Clients Say" />
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-4">
              <div className="p-4 rounded-3 border bg-white h-100 position-relative">
                <Quote size={32} className="position-absolute top-0 end-0 mt-3 me-3" style={{ color: "rgba(212,168,67,0.3)" }} />
                <p className="small text-muted fst-italic mb-4">"{t.quote}"</p>
                <p className="fw-semibold small mb-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.author}</p>
                <p className="small text-muted mb-0">{t.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactCTA />
  </main>
);

export default Clients;
