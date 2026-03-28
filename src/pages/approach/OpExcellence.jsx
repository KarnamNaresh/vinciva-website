import PageHero from "@/components/shared/PageHero";
import FiveIModel from "@/components/shared/FiveIModel";
import ContactCTA from "@/components/shared/ContactCTA";
import SectionHeading from "@/components/shared/SectionHeading";
import { Lightbulb, Search, Eye, Layers, Rocket, CheckCircle } from "lucide-react";

const steps = [
  { icon: <Lightbulb size={24} />, title: "Interest", description: "Sparking awareness of performance gaps through data and benchmarking." },
  { icon: <Search size={24} />, title: "Introspection", description: "Reflecting on current state processes, mindsets, and inefficiencies." },
  { icon: <Eye size={24} />, title: "Insight", description: "Linking reflection to process thinking with Lean and Six Sigma frameworks." },
  { icon: <Layers size={24} />, title: "Integration", description: "Translating insight into standardized systems and KPIs." },
  { icon: <Rocket size={24} />, title: "Implement", description: "Driving execution and ownership through coaching and sustained reinforcement." },
];

const focusAreas = [
  "Lean transformation and waste reduction",
  "Process standardization and documentation",
  "Cross-functional workflow optimization",
  "Performance management systems (KPIs, scorecards)",
  "Root cause analysis and problem-solving frameworks",
  "Agile operations and continuous improvement culture",
];

const OpExcellence = () => (
  <main>
    <PageHero title="Operational Excellence" subtitle="Enabling high-performance cultures through behaviourally anchored systems." />
    <section className="section-padding">
      <div className="container">
        <SectionHeading label="Our Approach" title="Structured Pathway to Operational Excellence" />
        <FiveIModel steps={steps} />
      </div>
    </section>
    <section className="section-padding bg-section-alt">
      <div className="container">
        <SectionHeading label="Focus Areas" title="What We Optimize" />
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

export default OpExcellence;
