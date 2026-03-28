import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/shared/ContactCTA";
import SectionHeading from "@/components/shared/SectionHeading";
import { User } from "lucide-react";

const teamMembers = [
  { name: "Facilitator 1", role: "Senior Consultant – OD & Strategy", bio: "Expert in organizational design, change management, and strategic transformation." },
  { name: "Facilitator 2", role: "Leadership & Behavioural Coach", bio: "Specializes in executive coaching, leadership development, and behavioural change." },
  { name: "Facilitator 3", role: "HR Advisory Lead", bio: "Experienced in HR transformation, policy design, and talent strategy." },
  { name: "Facilitator 4", role: "Operations Excellence Specialist", bio: "Lean Six Sigma expert focused on process optimization and continuous improvement." },
  { name: "Facilitator 5", role: "Technology & Automation Advisor", bio: "Drives digital transformation through human-centered technology integration." },
  { name: "Facilitator 6", role: "Learning & Development Specialist", bio: "Designs experiential learning programs grounded in behavioural science." },
];

const Team = () => (
  <main>
    <PageHero title="Our Team" subtitle="Our consultants, facilitators, and advisors bring a unique blend of industry experience, academic rigor, and facilitation expertise." />

    <section className="section-padding">
      <div className="container">
        <SectionHeading label="Facilitator Panel" title="Meet the Experts Behind Vinciva" description="Operating at the intersection of people and performance with backgrounds in organizational psychology, strategy, operations, and HR." />
        <div className="row g-4">
          {teamMembers.map((m, i) => (
            <div key={i} className="col-sm-6 col-lg-4">
              <div className="p-4 rounded-3 border bg-white text-center h-100 hover-card">
                <div className="rounded-circle gradient-navy d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "5rem", height: "5rem" }}>
                  <User size={32} className="text-gold" />
                </div>
                <h5 className="fw-semibold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{m.name}</h5>
                <p className="small text-gold fw-medium mb-2">{m.role}</p>
                <p className="small text-muted mb-0">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactCTA />
  </main>
);

export default Team;
