const PageHero = ({ title, subtitle, backgroundImage }) => (
  <section className="position-relative gradient-navy text-white overflow-hidden" style={{ paddingTop: "8rem", paddingBottom: "5rem" }}>
    {backgroundImage && (
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.2 }} />
    )}
    <div className="container position-relative text-center">
      <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {title}
      </h1>
      {subtitle && (
        <p className="lead opacity-75">{subtitle}</p>
      )}
    </div>
  </section>
);

export default PageHero;
