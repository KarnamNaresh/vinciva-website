import { Lightbulb, Search, Eye, Layers, Rocket } from "lucide-react";

const defaultSteps = [
  { icon: <Lightbulb size={24} />, title: "Interest", description: "Sparking curiosity and engagement through diagnostics, dialogue, and meaningful inquiry." },
  { icon: <Search size={24} />, title: "Introspection", description: "Encouraging reflection to uncover patterns, mindsets, and team dynamics." },
  { icon: <Eye size={24} />, title: "Insight", description: "Bridging reflection with practical understanding using curated frameworks and tools." },
  { icon: <Layers size={24} />, title: "Integration", description: "Translating insight into systems, behaviours, and practices aligned to your goals." },
  { icon: <Rocket size={24} />, title: "Implementation", description: "Embedding new ways of working through coaching, capability building, and sustained reinforcement." },
];

const FiveIModel = ({ steps = defaultSteps }) => (
  <div className="row g-4">
    {steps.map((step, i) => (
      <div key={i} className="col-6 col-md text-center">
        <div className="icon-box gradient-gold text-dark mx-auto mb-3" style={{ color: "var(--vinciva-navy-deep)" }}>
          {step.icon}
        </div>
        <h5 className="fw-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{step.title}</h5>
        <p className="small text-muted">{step.description}</p>
      </div>
    ))}
  </div>
);

export default FiveIModel;
