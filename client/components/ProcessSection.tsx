'use client';

import { useState, useEffect, useRef } from 'react';

export default function ProcessSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-driven phase detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = phaseRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActivePhase(index);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50% 0px'
      }
    );

    phaseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const phases = [
    {
      number: "01",
      title: "System & Threat Discovery",
      subtitle: "(Nothing is built here)",
      focus: "What must be protected",
      weD: [
        "Map business goals → system responsibility",
        "Identify critical data & failure points",
        "Define trust boundaries",
        "Make threat assumptions explicit"
      ],
      gates: [
        "Critical vs non-critical",
        "Secure-by-default paths",
        "Safe degradation paths"
      ],
      riskRemoved: "Building the wrong system efficiently."
    },
    {
      number: "02",
      title: "Architecture Blueprint",
      subtitle: "(Bias-free design)",
      focus: "Structural clarity before code",
      weD: [
        "Define system components",
        "Clarify data ownership",
        "Sketch API contracts",
        "Lock monolith vs modular"
      ],
      gates: [
        "Service boundaries",
        "Communication patterns",
        "Data access rules"
      ],
      riskRemoved: "Unscalable architecture hidden behind \"working code\"."
    },
    {
      number: "03",
      title: "Secure Implementation",
      subtitle: "(Discipline over speed)",
      focus: "Predictable, enforceable behavior",
      weD: [
        "Code follows architecture",
        "Security rules enforced explicitly",
        "Auth & authorization designed consciously",
        "Error paths treated as first-class"
      ],
      gates: [
        "Rule enforcement strictness",
        "Where security lives in code",
        "Allowed vs blocked behavior"
      ],
      riskRemoved: "Systems that work — but can't be trusted."
    },
    {
      number: "04",
      title: "Validation & Hardening",
      subtitle: "(Intentional discomfort)",
      focus: "Behavior under stress & misuse",
      weD: [
        "Test failure scenarios",
        "Validate edge cases",
        "Challenge security assumptions",
        "Verify logs & observability"
      ],
      gates: [
        "Failure behavior",
        "Visible vs silent events",
        "Human alert thresholds"
      ],
      riskRemoved: "Surprises in production."
    },
    {
      number: "05",
      title: "Deployment Readiness",
      subtitle: "(Exposure without fragility)",
      focus: "Operational safety",
      weD: [
        "Harden configuration",
        "Isolate secrets",
        "Review deployment assumptions",
        "Validate rollback & recovery"
      ],
      gates: [
        "Failure response",
        "Recovery speed",
        "Notification paths"
      ],
      riskRemoved: "Fragile production systems."
    }
  ];

  return (
    <section id="process" className="bg-devnsecure-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* ===== DECISION CORE INTRO ===== */}
        {showIntro && (
          <div className="mb-32 text-center">
            {/* Animated vertical line appears */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-devnsecure-teal to-transparent animate-pulse"></div>
            </div>

            {/* Text appears line by line */}
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-devnsecure-white animate-fade-in-up">
                ENGINEERING IS A SEQUENCE
              </h2>
              <h2 className="text-2xl md:text-3xl font-bold text-devnsecure-teal animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                OF IRREVERSIBLE DECISIONS
              </h2>
            </div>

            {/* Three nodes orbit then lock */}
            <div className="flex justify-center gap-6 mb-12">
              {['Problem Identified', 'Decision Locked', 'Risk Eliminated'].map((label, idx) => (
                <div key={idx} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-full border-2 border-devnsecure-teal flex items-center justify-center mx-auto mb-2 animate-pulse-glow">
                    <span className="text-devnsecure-teal text-xs font-bold">●</span>
                  </div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>

            {/* Final line fades in */}
            <p className="text-gray-300 text-lg animate-fade-in-up italic" style={{ animationDelay: '0.5s' }}>
              This is control. Not speed.
            </p>

            {/* Scroll indicator */}
            <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-gray-500 text-xs uppercase tracking-widest">↓ Scroll to explore</p>
            </div>
          </div>
        )}

        {/* ===== ENGINEERING TIMELINE ===== */}
        <div className="relative">
          
          {/* Center vertical spine */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-devnsecure-teal via-devnsecure-teal/20 to-transparent"></div>

          {/* Phases */}
          <div className="space-y-12 relative z-10">
            {phases.map((phase, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) phaseRefs.current[index] = el;
                }}
                className="group"
              >
                {/* Timeline node */}
                <div className="flex items-start mb-6">
                  <div className={`
                    w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm 
                    transition-all duration-300 flex-shrink-0 
                    ${activePhase === index 
                      ? 'bg-devnsecure-teal border-devnsecure-teal text-devnsecure-black scale-110 animate-pulse-glow' 
                      : 'bg-devnsecure-charcoal border-devnsecure-teal/40 text-devnsecure-teal'
                    }
                  `}>
                    {phase.number}
                  </div>
                </div>

                {/* Phase card */}
                <div className={`
                  pl-0 md:pl-16 pr-0 md:pr-0 mb-12 transition-all duration-300
                  ${activePhase === index 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-60 hover:opacity-80'
                  }
                `}>
                  
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-devnsecure-white mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-gray-500 text-sm italic">{phase.subtitle}</p>
                  </div>

                  {/* Focus area */}
                  <div className="mb-6 pb-6 border-b border-devnsecure-teal/20">
                    <p className="text-gray-300 text-sm">
                      <span className="text-devnsecure-teal font-mono font-bold">Focus:</span> {phase.focus}
                    </p>
                  </div>

                  {/* Two column layout: We Do + Gates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* We Do */}
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-devnsecure-teal font-bold mb-4">
                        We Do
                      </h4>
                      <ul className="space-y-3">
                        {phase.weD.map((item, i) => (
                          <li key={i} className="flex gap-3 text-gray-300 text-sm">
                            <span className="text-devnsecure-teal flex-shrink-0">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Decision Gates */}
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-devnsecure-teal font-bold mb-4">
                        Decision Gates
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {phase.gates.map((gate, i) => (
                          <li key={i} className="flex gap-3 text-gray-300 text-sm">
                            <span className="text-devnsecure-teal font-bold flex-shrink-0">✓</span>
                            <span>{gate}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Risk Removed */}
                  <div className="mt-6 pt-6 border-t border-devnsecure-teal/20">
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">
                      Risk Removed
                    </p>
                    <p className="text-gray-300 text-sm italic">
                      {phase.riskRemoved}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PROCESS GUARANTEE ===== */}
        <div className="mt-24 pt-12 border-t border-devnsecure-teal/20">
          <h3 className="text-xs uppercase tracking-widest text-devnsecure-teal font-bold mb-8 text-center">
            The Process Guarantee
          </h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <span className="text-devnsecure-teal font-bold flex-shrink-0">✓</span>
              <p className="text-gray-300">No phase is skipped</p>
            </div>
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-devnsecure-teal font-bold flex-shrink-0">✓</span>
              <p className="text-gray-300">No decision is blind</p>
            </div>
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-devnsecure-teal font-bold flex-shrink-0">✓</span>
              <p className="text-gray-300">No system ships without known failure modes</p>
            </div>
          </div>
        </div>

        {/* ===== CLOSING MICROCOPY ===== */}
        <div className="mt-16 pt-12 border-t border-devnsecure-teal/20 text-center">
          <p className="text-gray-400 text-base animate-fade-in-up">
            We don't rush systems into production.
            <span className="block text-devnsecure-white font-semibold mt-2">
              We prepare them.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
