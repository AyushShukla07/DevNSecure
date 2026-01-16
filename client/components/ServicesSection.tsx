export default function ServicesSection() {
  const services = [
    {
      title: "Backend Architecture",
      description: "Java / Spring Boot / Node.js enterprise-grade architecture design",
      icon: "▲",
    },
    {
      title: "Secure API Development",
      description: "Production-grade API design with security baked in from day one",
      icon: "◆",
    },
    {
      title: "Database Design & Optimization",
      description: "Schema design, indexing strategies, and performance optimization",
      icon: "■",
    },
    {
      title: "Backend Security & Hardening",
      description: "Penetration testing, vulnerability assessment, and hardening",
      icon: "●",
    },
  ];

  return (
    <section
      id="what-we-engineer"
      className="bg-devnsecure-black py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="fade-in text-devnsecure-white mb-4">
            What We Engineer
          </h2>
          <p className="fade-in text-gray-400 text-lg max-w-2xl">
            Core capabilities built on years of securing production systems at scale
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-dark group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="text-4xl text-devnsecure-teal mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-devnsecure-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
