export default function TechStackSection() {
  const technologies = [
    { name: "Java", category: "Backend" },
    { name: "Spring Boot", category: "Framework" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Redis", category: "Cache" },
    { name: "Docker", category: "Infrastructure" },
    { name: "Kubernetes", category: "Orchestration" },
  ];

  return (
    <section className="bg-devnsecure-black py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="fade-in text-devnsecure-white mb-4">Tech Stack</h2>
          <p className="fade-in text-gray-400 text-lg max-w-2xl mx-auto">
            Battle-tested technologies powering production systems at scale
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="card-dark flex flex-col items-center justify-center py-8 text-center"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <p className="text-devnsecure-white font-semibold text-lg mb-2">
                {tech.name}
              </p>
              <p className="text-devnsecure-teal text-xs font-mono">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
