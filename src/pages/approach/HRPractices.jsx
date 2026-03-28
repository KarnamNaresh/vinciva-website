import PageHero from "@/components/shared/PageHero";
import FiveIModel from "@/components/shared/FiveIModel";
import ContactCTA from "@/components/shared/ContactCTA";
import SectionHeading from "@/components/shared/SectionHeading";
import { Lightbulb, Search, Eye, Layers, Rocket, CheckCircle } from "lucide-react";

const steps = [
  { icon: <Lightbulb size={24} />, title: "Interest", description: "Engaging with the current HR landscape through audits and stakeholder dialogue." },
  { icon: <Search size={24} />, title: "Introspection", description: "Defining the desired culture and identifying gaps in people practices." },
  { icon: <Eye size={24} />, title: "Insight", description: "Translating awareness into actionable understanding of HR needs." },
  { icon: <Layers size={24} />, title: "Integration", description: "Operationalizing people practices with policy frameworks and systems." },
  { icon: <Rocket size={24} />, title: "Implementation", description: "Building internal ownership and sustainable HR capability." },
];

const solutions = [
  "HR audits and maturity assessments",
  "Policy development and documentation",
  "Performance management systems and appraisal frameworks",
  "Talent acquisition and retention strategy",
  "Employee lifecycle design and onboarding experiences",
  "HR digital transformation guidance",
];

const HRPractices = () => (
  <main>
    <PageHero title="HR Practices & Policies" subtitle="Building human capital systems that drive culture, compliance, and performance." />
    <section className="section-padding">
      <div className="container">
        <SectionHeading label="Our Approach" title="A Holistic, Participatory Approach to HR" />
        <FiveIModel steps={steps} />
      </div>
    </section>
    <section className="section-padding bg-section-alt">
      <div className="container">
        <SectionHeading label="Solutions" title="Our HR Solutions" />
        <div className="row g-3">
          {solutions.map((s, i) => (
            <div key={i} className="col-sm-6">
              <div className="d-flex align-items-start gap-2 p-3 rounded-3 border bg-white">
                <CheckCircle size={20} className="text-gold flex-shrink-0 mt-1" />
                <p className="small text-muted mb-0">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <ContactCTA />
  </main>
);

export default HRPractices;
