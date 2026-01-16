'use client';

import { useState } from 'react';

export default function SecuritySection() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      number: "01",
      title: "Assume Breach Mentality",
      reality:
        "Perimeter security eventually fails.",
      approach: [
        "Internal services never fully trust each other",
        "Sensitive actions require explicit verification",
        "Critical paths are isolated and monitored",
        "We identify where the system cannot afford to fail",
      ],
      misconception:
        "They design for prevention, not containment.",
    },
    {
      number: "02",
      title: "Authentication ≠ Authorization",
      reality:
        "Identifying a user is easy. Controlling actions is hard.",
      approach: [
        "Explicit role & permission models",
        "Least-privilege by default",
        "Authorization enforced at multiple layers",
        "Should this action be allowed — right now?",
      ],
      misconception:
        "They confuse identity with permission.",
    },
    {
      number: "03",
      title: "Data Protection By Design",
      reality:
        "Most breaches expose data, not servers.",
      approach: [
        "Data isolated by purpose",
        "Encryption where it matters",
        "Secrets never casually accessible",
        "Data is treated as toxic unless proven safe",
      ],
      misconception:
        "Encrypting everything, controlling nothing.",
    },
    {
      number: "04",
      title: "Observability Is A Security Tool",
      reality:
        "Attacks leave traces before damage.",
      approach: [
        "Security-relevant events logged deliberately",
        "Auth failures & anomalies tracked",
        "Logs designed for investigation",
        "Early detection requires intentional monitoring",
      ],
      misconception:
        "Logging for debugging, not response.",
    },
    {
      number: "05",
      title: "Failure-Resistant System Design",
      reality:
        "Failures become attack vectors.",
      approach: [
        "Intentional rate limiting",
        "Safe degradation",
        "Critical flows remain protected",
        "Under load, systems become more restrictive, not weaker",
      ],
      misconception:
        "Testing only happy paths.",
    },
  ];

  const practices = [
    "OWASP Top 10 (contextual)",
    "Secure secrets handling",
    "Input validation",
    "Token lifecycle control",
    "Abuse & rate-limit protection",
    "Audit logging",
  ];

  return (
    <section
      id="security"
      className="bg-devnsecure-black py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Immersive Intro Section */}
        <div className="mb-32 relative">
          {/* Center vertical accent line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-devnsecure-teal/0 via-devnsecure-teal/40 to-devnsecure-teal/0"></div>

          {/* Intro Text - Sequential Fade In */}
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
            <p className="fade-in text-gray-400 text-lg">
              This is not a badge.
            </p>
            <p className="fade-in text-gray-400 text-lg">
              This is not a checklist.
            </p>
            <p className="fade-in text-devnsecure-white text-xl font-semibold">
              This is how DevNSecure thinks about security.
            </p>
          </div>
        </div>

        {/* Fixed Section Title */}
        <div className="mb-24 relative z-10">
          <h2 className="fade-in text-devnsecure-white text-4xl md:text-5xl font-bold mb-4 leading-tight text-center">
            Security Is Not A Feature.
            <br />
            <span className="text-devnsecure-teal">It Is A Design Constraint.</span>
          </h2>
          <p className="fade-in text-gray-500 text-base mt-6 text-center max-w-2xl mx-auto">
            Every system we build assumes hostile environments, untrusted networks, and inevitable failure.
          </p>
        </div>

        {/* Vertical Timeline Section */}
        <div className="mb-32 relative">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-devnsecure-teal/30 to-transparent"></div>

          {/* 5 Principles as Timeline */}
          <div className="space-y-20">
            {principles.map((principle, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative min-h-[300px]"
                  onMouseEnter={() => setActivePrinciple(index)}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 w-12 h-12 flex items-center justify-center">
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        activePrinciple === index
                          ? 'bg-devnsecure-teal border-devnsecure-teal text-devnsecure-black'
                          : 'bg-devnsecure-charcoal border-devnsecure-teal/40 text-devnsecure-teal'
                      }`}
                    >
                      {principle.number}
                    </div>
                  </div>

                  {/* Content Card - Left or Right */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] mx-auto ${
                      isLeft ? 'md:ml-0 md:mr-auto md:pr-8' : 'md:ml-auto md:mr-0 md:pl-8'
                    }`}
                  >
                    <div
                      className={`bg-devnsecure-charcoal border border-[#26262C] rounded-lg p-6 md:p-8 transition-all duration-300 ${
                        activePrinciple === index
                          ? 'border-devnsecure-teal/60 shadow-lg shadow-devnsecure-teal/10'
                          : 'hover:border-devnsecure-teal/40'
                      }`}
                    >
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-semibold text-devnsecure-white mb-4">
                        {principle.title}
                      </h3>

                      {/* Threat Reality */}
                      <div className="mb-6">
                        <h4 className="text-xs uppercase tracking-widest text-devnsecure-teal font-bold mb-2">
                          Threat Reality
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {principle.reality}
                        </p>
                      </div>

                      {/* How We Engineer It */}
                      <div className="mb-6">
                        <h4 className="text-xs uppercase tracking-widest text-devnsecure-teal font-bold mb-3">
                          How We Engineer This
                        </h4>
                        <ul className="space-y-2">
                          {principle.approach.map((item, i) => (
                            <li
                              key={i}
                              className="text-gray-300 text-sm flex items-start gap-2"
                            >
                              <span className="text-devnsecure-teal mt-1 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What Most Teams Get Wrong */}
                      <div className="pt-4 border-t border-[#26262C]">
                        <p className="text-gray-400 text-xs italic">
                          <span className="font-semibold text-gray-500">Most teams:</span> {principle.misconception}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Supporting Practices Strip */}
        <div className="mb-20 pt-8 border-t border-[#26262C]">
          <h3 className="text-xs uppercase tracking-widest text-devnsecure-teal font-bold mb-6 text-center">
            Supporting Security Practices
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {practices.map((practice, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 text-gray-400 text-xs font-mono px-3 py-2 bg-devnsecure-charcoal/50 border border-[#26262C] rounded"
              >
                <span className="text-devnsecure-teal/60">▪</span>
                <span>{practice}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Microcopy Anchor */}
        <div className="text-center mb-16 pt-8 border-t border-[#26262C]">
          <p className="fade-in text-gray-400 text-lg italic font-light">
            Security is what remains when convenience is stripped away.
          </p>
        </div>

        {/* Who This Is For / Not For */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* This is for */}
          <div className="bg-devnsecure-charcoal border border-devnsecure-teal/20 rounded-lg p-8">
            <h4 className="text-devnsecure-teal font-bold text-sm uppercase tracking-widest mb-4">
              This Is For
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="text-devnsecure-teal mt-1">→</span>
                <span>Fintech platforms</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="text-devnsecure-teal mt-1">→</span>
                <span>SaaS with sensitive data</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="text-devnsecure-teal mt-1">→</span>
                <span>Systems with real consequences</span>
              </li>
            </ul>
          </div>

          {/* Not for */}
          <div className="bg-devnsecure-charcoal border border-gray-700 rounded-lg p-8">
            <h4 className="text-gray-500 font-bold text-sm uppercase tracking-widest mb-4">
              This Is Not For
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <span>✗</span>
                <span>Marketing demos</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <span>✗</span>
                <span>Disposable MVPs</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <span>✗</span>
                <span>Compliance-only security</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
