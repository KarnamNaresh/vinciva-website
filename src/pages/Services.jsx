import { Building2, Users, BarChart3, FileText, Cpu, CheckCircle, Globe, Monitor, MessageCircle } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FiveIModel from "@/components/shared/FiveIModel";
import ContactCTA from "@/components/shared/ContactCTA";
import approachBg from "@/assets/approach-bg.jpg";
import { Link } from "react-router-dom";

const services = [
  { icon: <Building2 size={28} />, title: "Organizational Development", items: ["Organizational design and restructuring", "Change management and transformation", "Culture diagnostics and leadership alignment", "Strategic planning and capability building"], link: "/approach/organizational-development" },
  { icon: <Users size={28} />, title: "Leadership & Behavioural Training", items: ["Leadership development and executive coaching", "Functional and behavioural skills training", "Learning needs analysis and development planning", "High-potential talent acceleration programs"], link: "/approach/leadership-training" },
  { icon: <BarChart3 size={28} />, title: "Operational Excellence", items: ["Lean Six Sigma implementation", "KPI design and operational benchmarking", "Business process reengineering", "Continuous improvement strategy and coaching"], link: "/approach/operational-excellence" },
  { icon: <FileText size={28} />, title: "Human Resource Advisory", items: ["Comprehensive HR audits and diagnostics", "Policy design and regulatory alignment", "Talent acquisition and retention strategies", "Performance and employee engagement systems"], link: "/approach/hr-practices" },
  { icon: <Cpu size={28} />, title: "Process Automation & Technology", items: ["Technology enablement diagnostics", "Process mapping and automation design", "Low-code/no-code solutions", "Change management and digital adoption strategy"], link: "/approach/process-automation" },
];

const locations = [
  { icon: <Globe size={24} />, title: "Pan-India Presence", desc: "Services across India with native-language-speaking consultants." },
  { icon: <Monitor size={24} />, title: "Global Reach", desc: "International delivery, especially in English-speaking regions." },
  { icon: <MessageCircle size={24} />, title: "Virtual Delivery", desc: "Seamless workshops, coaching, and consulting regardless of location." },
];

const Services = () => (
  <main>
    <PageHero title="Our Core Services" subtitle="We specialize in five core domains, each delivered through our proprietary '5i' Model for deep learning, contextual relevance, and sustainable adoption." backgroundImage={approachBg} />

    <section className="section-padding">
      <div className="container">
        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="p-4 rounded-3 border bg-white h-100 hover-card">
                <div className="icon-box gradient-gold mb-3" style={{ color: "var(--vinciva-navy-deep)" }}>{s.icon}</div>
                <h5 className="fw-semibold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h5>
                <ul className="list-unstyled mb-3">
                  {s.items.map((item, j) => (
                    <li key={j} className="d-flex align-items-start gap-2 mb-2 small text-muted">
                      <CheckCircle size={16} className="text-gold flex-shrink-0 mt-1" /> {item}
                    </li>
                  ))}
                </ul>
                <Link to={s.link} className="small fw-semibold text-gold text-decoration-none">Learn more →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-section-alt">
      <div className="container">
        <SectionHeading label="Our Methodology" title="The Vinciva '5i' Model" description="A structured methodology that ensures deep learning, contextual relevance, and sustainable adoption." />
        <FiveIModel />
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        <SectionHeading label="Locations" title="Delivering Impact, Everywhere" />
        <div className="row g-4">
          {locations.map((l, i) => (
            <div key={i} className="col-md-4">
              <div className="p-4 rounded-3 border bg-white text-center h-100">
                <div className="icon-box gradient-gold mx-auto mb-3" style={{ color: "var(--vinciva-navy-deep)" }}>{l.icon}</div>
                <h6 className="fw-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{l.title}</h6>
                <p className="small text-muted mb-0">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactCTA />
  </main>
);

export default Services;
