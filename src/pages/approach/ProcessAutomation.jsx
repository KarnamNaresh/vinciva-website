import PageHero from "@/components/shared/PageHero";
import FiveIModel from "@/components/shared/FiveIModel";
import ContactCTA from "@/components/shared/ContactCTA";
import SectionHeading from "@/components/shared/SectionHeading";
import { Lightbulb, Search, Eye, Layers, Rocket, CheckCircle } from "lucide-react";

const steps = [
  { icon: <Lightbulb size={24} />, title: "Interest", description: "Sparking curiosity around efficiency and innovation opportunities." },
  { icon: <Search size={24} />, title: "Introspection", description: "Reflecting on current workflows, bottlenecks, and manual processes." },
  { icon: <Eye size={24} />, title: "Insight", description: "Aligning needs with technological possibilities and vendor evaluation." },
  { icon: <Layers size={24} />, title: "Integration", description: "Designing human-centered tech solutions with behaviour-driven UI/UX." },
  { icon: <Rocket size={24} />, title: "Implementation", description: "Embedding technology with change readiness, training, and support." },
];

const focusAreas = [
  "Digital process audits and opportunity identification",
  "Low-code/no-code solution mapping and vendor evaluation",
  "Behaviour-driven UI/UX and workflow design",
  "RPA, AI-driven analytics, and knowledge management",
  "Adoption strategy, training, and post-implementation support",
];

const ProcessAutomation = () => (
  <main>
    <PageHero title="Process Automation & Technology" subtitle="Enabling digital transformation through human-centered design." />
    <section className="section-padding">
      <div className="container">
        <SectionHeading label="The 5i Model" title="Digital Transformation, Done Right" />
        <FiveIModel steps={steps} />
      </div>
    </section>
    <section className="section-padding bg-section-alt">
      <div className="container">
        <SectionHeading label="Focus Areas" title="Our Technology Solutions" />
        <div className="row g-3">
          {focusAreas.map((f, i) => (
            <div key={i} className="col-sm-6">
              <div className="d-flex align-items-start gap-2 p-3 rounded-3 border bg-white">
                <CheckCircle size={20} className="text-gold flex-shrink-0 mt-1" />
                <p className="small text-muted mb-0">{f}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <ContactCTA />
  </main>
);

export default ProcessAutomation;
