import PageHero from "@/components/shared/PageHero";
import FiveIModel from "@/components/shared/FiveIModel";
import ContactCTA from "@/components/shared/ContactCTA";
import SectionHeading from "@/components/shared/SectionHeading";
import { Lightbulb, Search, Eye, Layers, Rocket, CheckCircle } from "lucide-react";

const steps = [
  { icon: <Lightbulb size={24} />, title: "Interest", description: "Creating curiosity for change through diagnostics and stakeholder engagement." },
  { icon: <Search size={24} />, title: "Introspection", description: "Building shared understanding of current organizational dynamics." },
  { icon: <Eye size={24} />, title: "Insight", description: "Bridging reflection with strategy using evidence-based frameworks." },
  { icon: <Layers size={24} />, title: "Integration", description: "Aligning behaviour with organizational goals through structured interventions." },
  { icon: <Rocket size={24} />, title: "Implementation", description: "Embedding change into culture through sustained capability building." },
];

const differentiators = [
  { title: "Behaviour-Based Design", desc: "We focus on the human systems that underpin performance." },
  { title: "Tailored Interventions", desc: "We design interventions that match your context, culture, and goals." },
  { title: "Capability Transfer", desc: "We build your internal capability to lead and sustain change." },
];

const OrgDevelopment = () => (
  <main>
    <PageHero title="Organizational Development" subtitle="We help organizations evolve by focusing on the most critical lever for change: people." />
    <section className="section-padding">
      <div className="container">
        <SectionHeading label="Our Approach" title="Structured Pathway to Organizational Evolution" />
        <FiveIModel steps={steps} />
      </div>
    </section>
    <section className="section-padding bg-section-alt">
      <div className="container">
        <SectionHeading label="The Vinciva Difference" title="Why Choose Us" />
        <div className="row g-4">
          {differentiators.map((d, i) => (
            <div key={i} className="col-md-4">
              <div className="p-4 bg-white rounded-3 border h-100">
                <CheckCircle size={24} className="text-gold mb-3" />
                <h6 className="fw-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{d.title}</h6>
                <p className="small text-muted mb-0">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <ContactCTA />
  </main>
);

export default OrgDevelopment;
