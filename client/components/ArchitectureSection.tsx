export default function ArchitectureSection() {
  return (
    <section id="architecture" className="bg-devnsecure-black py-24 md:py-32 border-t border-devnsecure-charcoal/50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-devnsecure-white mb-4 animate-fade-in-up">
            System Architecture, Before Code
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We design structure first — code follows architecture, not the other way around.
          </p>
        </div>

        {/* Architecture Diagram (Conceptual Box Layout) */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-4 max-w-2xl mx-auto">
            {/* API Layer */}
            <div className="bg-devnsecure-charcoal/30 border border-devnsecure-teal/30 rounded p-6 hover:border-devnsecure-teal/60 transition-all duration-300">
              <p className="text-devnsecure-teal font-bold text-sm uppercase tracking-widest">API Layer</p>
              <p className="text-gray-300 text-sm mt-2">REST/GraphQL endpoints, rate limiting, request validation</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-2">
              <div className="text-gray-500">↓</div>
            </div>

            {/* Auth & Access Control */}
            <div className="bg-devnsecure-charcoal/30 border border-devnsecure-teal/30 rounded p-6 hover:border-devnsecure-teal/60 transition-all duration-300">
              <p className="text-devnsecure-teal font-bold text-sm uppercase tracking-widest">Auth & Access Control</p>
              <p className="text-gray-300 text-sm mt-2">Authentication, authorization, RBAC, permission enforcement</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-2">
              <div className="text-gray-500">↓</div>
            </div>

            {/* Business Logic */}
            <div className="bg-devnsecure-charcoal/30 border border-devnsecure-teal/30 rounded p-6 hover:border-devnsecure-teal/60 transition-all duration-300">
              <p className="text-devnsecure-teal font-bold text-sm uppercase tracking-widest">Business Logic</p>
              <p className="text-gray-300 text-sm mt-2">Domain models, workflows, state management, data integrity</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-2">
              <div className="text-gray-500">↓</div>
            </div>

            {/* Data Layer */}
            <div className="bg-devnsecure-charcoal/30 border border-devnsecure-teal/30 rounded p-6 hover:border-devnsecure-teal/60 transition-all duration-300">
              <p className="text-devnsecure-teal font-bold text-sm uppercase tracking-widest">Data Layer</p>
              <p className="text-gray-300 text-sm mt-2">Database, caching, queries, transaction handling, encryption</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-2">
              <div className="text-gray-500">↓</div>
            </div>

            {/* Security & Observability */}
            <div className="bg-devnsecure-charcoal/30 border border-devnsecure-teal/30 rounded p-6 hover:border-devnsecure-teal/60 transition-all duration-300">
              <p className="text-devnsecure-teal font-bold text-sm uppercase tracking-widest">Security & Observability</p>
              <p className="text-gray-300 text-sm mt-2">Logging, monitoring, alerting, audit trails, incident response</p>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="text-center mt-16 pt-12 border-t border-devnsecure-charcoal/50 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-gray-400 text-base font-mono">
            Architecture decisions are finalized before implementation begins.
          </p>
        </div>
      </div>
    </section>
  );
}
