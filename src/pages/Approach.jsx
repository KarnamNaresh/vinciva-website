import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FiveIModel from "@/components/shared/FiveIModel";
import ContactCTA from "@/components/shared/ContactCTA";
import approachBg from "@/assets/approach-bg.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const subPages = [
  { title: "Behavioural & Leadership Training", path: "/approach/leadership-training", desc: "Build the internal leadership pipeline and embed a culture of continuous learning." },
  { title: "Organizational Development", path: "/approach/organizational-development", desc: "Evolve organizations by focusing on people as the critical lever for change." },
  { title: "HR Practices & Policies", path: "/approach/hr-practices", desc: "Build human capital systems that drive culture, compliance, and performance." },
  { title: "Operational Excellence", path: "/approach/operational-excellence", desc: "Enable high-performance cultures through behaviourally anchored systems." },
  { title: "Process Automation & Tech", path: "/approach/process-automation", desc: "Enable digital transformation through human-centered design." },
];

const Approach = () => (
  <main>
    <PageHero title="Our Approach" subtitle="Transformation is not an event—it's a structured journey. We apply our proprietary '5i' Model across every engagement." backgroundImage={approachBg} />

    <section className="section-padding">
      <div className="container">
        <SectionHeading label="The 5i Model" title="From Awareness to Sustained Change" description="A behavioural and systems-based framework that moves individuals and organizations from awareness to sustained change." />
        <FiveIModel />
        <p className="text-center text-muted mt-5 mx-auto">
          Whether in leadership development, operational improvement, or organizational design, we don't just deliver solutions—we build internal capacity for ongoing evolution. Our approach is immersive, participatory, and deeply human.
        </p>
      </div>
    </section>

    <section className="section-padding bg-section-alt">
      <div className="container">
        <SectionHeading label="Deep Dives" title="Explore by Domain" />
        <div className="row g-4">
          {subPages.map((s, i) => (
            <div key={i} className="col-md-6">
              <Link to={s.path} className="text-decoration-none d-flex justify-content-between align-items-start gap-3 p-4 rounded-3 border bg-white h-100 hover-card">
                <div>
                  <h5 className="fw-semibold mb-2 text-dark" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h5>
                  <p className="small text-muted mb-0">{s.desc}</p>
                </div>
                <ArrowRight size={20} className="text-muted flex-shrink-0 mt-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactCTA />
  </main>
);

export default Approach;
