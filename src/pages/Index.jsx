import { Link } from "react-router-dom";
import { Target, Eye, Heart, Compass, Shield, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactCTA from "@/components/shared/ContactCTA";

const values = [
  { icon: <Shield size={20} />, title: "Integrity", desc: "We operate with transparency, accountability, and ethical commitment." },
  { icon: <Heart size={20} />, title: "Human-Centricity", desc: "We place people at the core of every solution." },
  { icon: <Eye size={20} />, title: "Insight-Driven", desc: "Our actions are guided by data, reflection, and behavioural insight." },
  { icon: <Zap size={20} />, title: "Excellence in Execution", desc: "We deliver solutions with clarity, precision, and lasting value." },
  { icon: <Users size={20} />, title: "Collaboration", desc: "We co-create inclusive and participatory transformation." },
  { icon: <Target size={20} />, title: "Sustainable Impact", desc: "We build capability, not dependency." },
];

const whyVinciva = [
  { label: "Human-Centered", desc: "We focus on behavioural enablers, not just technical fixes" },
  { label: "Context-Aware", desc: "Our work is grounded in your business reality" },
  { label: "Action-Oriented", desc: "We move from insight to execution" },
  { label: "Trusted by Leaders", desc: "Our clients value our integrity, expertise, and impact" },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="position-relative d-flex align-items-center gradient-navy text-white overflow-hidden" style={{ minHeight: "100vh" }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.25 }} />
      <div className="position-relative container py-5">
        <span className="d-inline-block small fw-semibold text-uppercase text-gold mb-4 animate-fade-up" style={{ letterSpacing: "0.25em" }}>
          Strategic Consulting & Capacity Building
        </span>
        <h1 className="display-3 fw-bold mb-4 animate-fade-up" style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1, animationDelay: "0.1s" }}>
          Empowering Organizations.{" "}
          <span className="text-gradient-gold">Elevating Performance.</span>
        </h1>
        <p className="lead opacity-75 mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Strategic partners in Organizational Development, Leadership Training, Operational Excellence, Human Resources, Process Automation & Technology Integration.
        </p>
        <div className="d-flex flex-column flex-sm-row gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link to="/services" className="btn btn-gold">Explore Our Services</Link>
          <Link to="/approach" className="btn-outline-light-custom">Our Approach</Link>
        </div>
      </div>
    </section>

    {/* About */}
    <section className="section-padding">
      <div className="container">
        <SectionHeading label="About Us" title="Strategic Partners in Organizational Growth" description="At Vinciva, we are more than consultants—we are catalysts for change. We partner with organizations to design and deliver strategic learning, operational transformation, and human capital solutions." />
        <div className="row g-4 mt-3">
          {[
            { icon: <Compass size={32} className="text-gold mb-3" />, title: "Our Purpose", text: "We exist to unlock human and organizational potential—because we believe that real, lasting transformation begins with people. We co-create futures where performance is human, leadership is intentional, and progress is built from the inside out." },
            { icon: <Eye size={32} className="text-gold mb-3" />, title: "Our Vision", text: "To be a trusted partner in shaping behaviourally intelligent, performance-driven organizations that thrive in complexity and lead with purpose." },
            { icon: <Target size={32} className="text-gold mb-3" />, title: "Our Mission", text: "To enable individuals, teams, and organizations to realize their full potential through behaviourally informed, experience-driven transformation." },
            { icon: <Heart size={32} className="text-gold mb-3" />, title: "Our Philosophy", text: "Change by Design — Real transformation happens when insight is personal, learning is experiential, behaviour is reinforced over time, and people are empowered to lead the change." },
          ].map((card, i) => (
            <div key={i} className="col-md-6">
              <div className="p-4 rounded-3 border bg-light h-100">
                {card.icon}
                <h5 className="fw-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{card.title}</h5>
                <p className="small text-muted mb-0">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-section-alt">
      <div className="container">
        <SectionHeading label="Our Values" title="Principles That Define Our Work" />
        <div className="row g-4">
          {values.map((v, i) => (
            <div key={i} className="col-sm-6 col-lg-4">
              <div className="p-4 bg-white rounded-3 border h-100 hover-card">
                <div className="icon-box-sm gradient-gold mb-3" style={{ color: "var(--vinciva-navy-deep)" }}>
                  {v.icon}
                </div>
                <h6 className="fw-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{v.title}</h6>
                <p className="small text-muted mb-0">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Vinciva */}
    <section className="section-padding">
      <div className="container">
        <SectionHeading label="Why Vinciva" title="What Sets Us Apart" />
        <div className="row g-4">
          {whyVinciva.map((w, i) => (
            <div key={i} className="col-sm-6">
              <div className="d-flex gap-3 p-4 rounded-3 border bg-white h-100">
                <CheckCircle size={24} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <h6 className="fw-semibold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{w.label}</h6>
                  <p className="small text-muted mb-0">{w.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to="/services" className="btn btn-gold d-inline-flex align-items-center gap-2">
            Explore Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    <ContactCTA />
  </main>
);

export default Index;
