import PageHero from "@/components/shared/PageHero";
import FiveIModel from "@/components/shared/FiveIModel";
import ContactCTA from "@/components/shared/ContactCTA";
import SectionHeading from "@/components/shared/SectionHeading";
import { Lightbulb, Search, Eye, Layers, Rocket, CheckCircle } from "lucide-react";

const steps = [
  { icon: <Lightbulb size={24} />, title: "Interest", description: "Igniting curiosity through experiential openings, provocative case studies, and real-world relevance." },
  { icon: <Search size={24} />, title: "Introspection", description: "Encouraging self-reflection through guided activities, assessments, and peer dialogue." },
  { icon: <Eye size={24} />, title: "Insight", description: "Bridging reflection with understanding through curated frameworks, models, and expert inputs." },
  { icon: <Layers size={24} />, title: "Integration", description: "Applying learning to leadership contexts through role-plays, simulations, and action planning." },
  { icon: <Rocket size={24} />, title: "Implement", description: "Embedding new behaviours through follow-up coaching, accountability partnerships, and reinforcement." },
];

const philosophy = [
  "Building reflective capacity for enhanced self-awareness",
  "Facilitating experiential learning that sticks and scales",
  "Connecting learning with everyday leadership contexts",
  "Reinforcing new behaviours through practice, feedback, and accountability",
];

const LeadershipTraining = () => (
  <main>
    <PageHero title="Behavioural & Leadership Training" subtitle="A structured path to sustainable learning and transformation through our proprietary '5i' Model." />
    <section className="section-padding">
      <div className="container">
        <SectionHeading label="The 5i Model in Training" title="Five Dynamic Stages of Transformation" />
        <FiveIModel steps={steps} />
      </div>
    </section>
    <section className="section-padding bg-section-alt">
      <div className="container">
        <SectionHeading label="Our Philosophy" title="Behavioural Change by Design" description="We don't just train—we transform. Our programs foster deep, lasting change." />
        <div className="row g-3">
          {philosophy.map((p, i) => (
            <div key={i} className="col-sm-6">
              <div className="d-flex align-items-start gap-2 p-3 rounded-3 border bg-white">
                <CheckCircle size={20} className="text-gold flex-shrink-0 mt-1" />
                <p className="small text-muted mb-0">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <ContactCTA />
  </main>
);

export default LeadershipTraining;
