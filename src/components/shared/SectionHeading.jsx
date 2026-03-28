const SectionHeading = ({ label, title, description, centered = true, light = false }) => (
  <div className={`mb-5 ${centered ? "text-center" : ""}`}>
    {label && (
      <span className="d-inline-block small fw-semibold text-uppercase text-gold mb-2" style={{ letterSpacing: "0.2em", fontSize: "0.75rem" }}>
        {label}
      </span>
    )}
    <h2 className={`fw-bold ${light ? "text-white" : ""}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {title}
    </h2>
    {description && (
      <p className={`mt-3 lead ${centered ? "mx-auto" : ""} ${light ? "text-white opacity-75" : "text-muted"}`} style={{ maxWidth: "720px" }}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
