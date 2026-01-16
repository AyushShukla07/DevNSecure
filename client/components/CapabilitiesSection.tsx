export default function CapabilitiesSection() {
  const capabilities = [
    {
      number: "01",
      name: "Backend System Architecture",
      problem:
        "Most systems fail not because of bad code, but because of bad architectural decisions made too early.",
      approach: [
        "Breaking the product into bounded domains",
        "Defining clear service responsibilities",
        "Choosing monolith vs modular vs distributed consciously",
        "Designing for observability, failure, and scale from day one",
      ],
      difference: [
        "No copy-paste architectures",
        "No 'microservices because it's cool'",
        "No framework-driven design",
        "We design systems, not just APIs",
      ],
      technologies: ["Java / Spring Boot", "Node.js", "REST / GraphQL", "Event-driven patterns"],
    },
    {
      number: "02",
      name: "Secure API & Authentication Engineering",
      problem:
        "APIs are the largest attack surface of modern systems — yet most are protected with basic middleware and hope.",
      approach: [
        "Explicit trust boundaries",
        "Role & permission modeling",
        "Token lifecycle control",
        "Rate limiting & abuse protection",
        "Audit-ready request tracking",
      ],
      difference: [
        "We design auth flows before writing controllers",
        "Every endpoint has a security intent",
        "We assume malicious behavior by default",
        "Security is embedded, not added later",
      ],
      technologies: ["OAuth 2.0", "JWT", "Session-based auth", "API gateways"],
    },
    {
      number: "03",
      name: "Database & Data Flow Engineering",
      problem:
        "Slow queries, broken migrations, data inconsistency, and systems that collapse under growth.",
      approach: [
        "Designing schemas from access patterns, not entities",
        "Choosing the right database for the job",
        "Planning migrations as first-class citizens",
        "Engineering read/write paths separately",
      ],
      difference: [
        "No 'MongoDB everywhere'",
        "No premature optimization",
        "No ignoring data growth curves",
        "Your data layer remains predictable under pressure",
      ],
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Query optimization"],
    },
    {
      number: "04",
      name: "Backend Security & Hardening",
      problem:
        "Security breaches don't come from Hollywood hacks — they come from small oversights.",
      approach: [
        "Threat modeling critical flows",
        "Eliminating insecure defaults",
        "Protecting sensitive data paths",
        "Enforcing least-privilege everywhere",
        "Logging security-relevant events",
      ],
      difference: [
        "We don't just 'follow OWASP' — we apply it contextually",
        "Security decisions are documented and intentional",
        "Systems remain secure without becoming unusable",
      ],
      technologies: ["OWASP Top 10 mitigation", "Secure secrets handling", "Encryption strategies", "Audit logs"],
    },
  ];

  return (
    <section
      id="what-we-engineer"
      className="bg-devnsecure-black py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="fade-in text-devnsecure-white mb-4">
            Engineered Capabilities
          </h2>
          <p className="fade-in text-gray-400 text-lg max-w-3xl">
            Production-grade backend systems designed for security, scale, and failure resistance.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="card-dark group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Header with Number and Title */}
              <div className="flex items-start gap-6 mb-8">
                <div className="text-devnsecure-teal font-bold text-3xl font-mono flex-shrink-0">
                  {capability.number}
                </div>
                <h3 className="text-2xl font-semibold text-devnsecure-white">
                  {capability.name}
                </h3>
              </div>

              {/* Grid Layout for Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Problem It Solves */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-devnsecure-teal font-bold mb-3">
                    The Problem
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.problem}
                  </p>
                </div>

                {/* How We Engineer It */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-devnsecure-teal font-bold mb-3">
                    How We Engineer It
                  </h4>
                  <ul className="space-y-2">
                    {capability.approach.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-devnsecure-teal mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* What Makes It Different */}
              <div className="mb-8 pt-8 border-t border-[#26262C]">
                <h4 className="text-xs uppercase tracking-widest text-devnsecure-teal font-bold mb-3">
                  What Makes This Different
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {capability.difference.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-devnsecure-teal">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-8 border-t border-[#26262C]">
                <h4 className="text-xs uppercase tracking-widest text-devnsecure-teal font-bold mb-4">
                  Technologies & Patterns
                </h4>
                <div className="flex flex-wrap gap-2">
                  {capability.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 bg-devnsecure-black border border-[#26262C] text-devnsecure-white text-xs font-mono rounded hover:border-devnsecure-teal transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Microcopy - The Power Move */}
        <div className="mt-16 pt-16 border-t border-[#26262C] text-center">
          <p className="text-gray-400 italic text-lg">
            We don't optimize for demos.
            <span className="block text-devnsecure-white font-semibold mt-2">
              We optimize for production.
            </span>
          </p>
        </div>

        {/* Who This Is For / Not For (Optional Elite Move) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* This is for */}
          <div className="bg-devnsecure-black border border-devnsecure-teal/20 rounded-lg p-6">
            <h4 className="text-devnsecure-teal font-bold text-sm uppercase tracking-widest mb-4">
              This is for
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <span className="text-devnsecure-teal">→</span>
                <span>Startups building serious products</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <span className="text-devnsecure-teal">→</span>
                <span>Teams that care about correctness</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <span className="text-devnsecure-teal">→</span>
                <span>Systems where downtime is expensive</span>
              </li>
            </ul>
          </div>

          {/* Not for */}
          <div className="bg-devnsecure-black border border-gray-700 rounded-lg p-6">
            <h4 className="text-gray-500 font-bold text-sm uppercase tracking-widest mb-4">
              This is not for
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-500 text-sm">
                <span>✗</span>
                <span>MVPs built in a weekend</span>
              </li>
              <li className="flex items-start gap-2 text-gray-500 text-sm">
                <span>✗</span>
                <span>Feature-only thinking</span>
              </li>
              <li className="flex items-start gap-2 text-gray-500 text-sm">
                <span>✗</span>
                <span>Teams looking for the cheapest option</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
