'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  { id: 'backend', number: '01', title: 'Backend Systems', label: 'Backend Systems' },
  { id: 'database', number: '02', title: 'Database', label: 'Databases' },
  { id: 'security', number: '03', title: 'Security', label: 'Security' },
  { id: 'why', number: '04', title: 'Why DevNsecure', label: 'Why DevNsecure' },
  { id: 'getstarted', number: '05', title: 'Get Started', label: 'Get Started' },
];

export default function Services() {
  const [activeSection, setActiveSection] = useState('backend');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll-driven section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-devnsecure-black min-h-screen">
      <Header />

      <div className="flex relative">
        {/* ===== FIXED LEFT SIDEBAR NAV - Hidden on mobile/tablet ===== */}
        <div className="fixed left-0 top-32 h-screen w-64 bg-devnsecure-black border-r border-devnsecure-charcoal/50 pl-8 pt-12 hidden xl:block">
          <div className="space-y-6">
            {sections.map((section) => (
              <button
                key={section.id}
                data-section={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block text-left text-sm transition-all duration-300 relative pl-4 ${
                  activeSection === section.id
                    ? 'text-devnsecure-teal font-semibold'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {/* Left indicator line */}
                {activeSection === section.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-devnsecure-teal"></div>
                )}
                <span className="text-xs uppercase tracking-widest block mb-1">
                  — {section.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ===== MAIN CONTENT (RIGHT SIDE) ===== */}
        <div className="flex-1 xl:ml-64">
          {/* HERO SECTION */}
          <section className="pt-6 md:pt-8 lg:pt-12 pb-0 px-4 md:px-6 lg:px-12">
            <div className="text-center w-full max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-devnsecure-white mt-16 mb-2 animate-fade-in-up">
                OUR SERVICES
              </h1>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-3 animate-fade-in-up leading-snug" style={{ animationDelay: '0.1s' }}>
                We build backend systems with strong foundations — so products scale without breaking.
              </p>
            </div>
          </section>

          {/* SECTION 1: BACKEND SYSTEMS */}
          <section
            id="backend"
            ref={(el) => {
              if (el) sectionRefs.current['backend'] = el;
            }}
            className="pt-4 md:pt-6 lg:pt-6 pb-8 md:pb-12 lg:pb-16 px-4 md:px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12">
              <div className="hidden md:block flex-shrink-0">
                <span className="text-3xl font-bold text-devnsecure-teal/30">01</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-devnsecure-white mb-2 animate-fade-in-up">
                  Backend Systems Engineering
                </h2>
                <p className="text-xs md:text-sm italic text-gray-400 mb-6 md:mb-8 animate-fade-in-up">
                  Production-ready backend systems designed for scale, correctness, and longevity.
                </p>

                {/* Capability Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {[
                    'REST API development',
                    'Business logic & workflow design',
                    'Authentication & authorization systems',
                    'Payment & subscription systems',
                    'Scalable backend architecture',
                    'Third-party API integrations',
                    'Backend performance optimization',
                    'Legacy backend refactoring',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group text-gray-300 text-sm py-3 px-4 rounded cursor-pointer hover:bg-devnsecure-charcoal/50 transition-all duration-300 relative"
                    >
                      <span className="inline-block relative">
                        {item}
                        <div className="absolute bottom-0 left-0 w-0 h-px bg-devnsecure-teal group-hover:w-full transition-all duration-300"></div>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technology Strip */}
                <div className="mb-10 pb-10 border-b border-devnsecure-charcoal/50 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Technologies</p>
                  <div className="flex gap-6 flex-wrap">
                    {['Java/Spring Boot', 'Node.js', 'Express', 'REST'].map((tech) => (
                      <span key={tech} className="text-gray-400 text-xs opacity-70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best For */}
                <div className="bg-devnsecure-charcoal/30 border border-devnsecure-charcoal/50 rounded p-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Best For</p>
                  <p className="text-gray-300 text-sm">
                    Startups • SaaS Platforms • Internal Tools • Enterprise Systems
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: DATABASE ENGINEERING */}
          <section
            id="database"
            ref={(el) => {
              if (el) sectionRefs.current['database'] = el;
            }}
            className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 md:px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20 border-t border-devnsecure-charcoal/30"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12">
              <div className="hidden md:block flex-shrink-0">
                <span className="text-3xl font-bold text-devnsecure-teal/30">02</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-devnsecure-white mb-2 animate-fade-in-up">
                  Database & Data Flow Engineering
                </h2>
                <p className="text-xs md:text-sm italic text-gray-400 mb-6 md:mb-8 animate-fade-in-up">
                  Reliable systems are built on predictable data behavior.
                </p>

                {/* Capability Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {[
                    'Database architecture & schema design',
                    'SQL & NoSQL database setup',
                    'Query optimization & indexing',
                    'Data migration & transformation',
                    'Transaction & data integrity handling',
                    'Backup, recovery & disaster planning',
                    'Database scalability & monitoring',
                    'Data pipeline design',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group text-gray-300 text-sm py-3 px-4 rounded cursor-pointer hover:bg-devnsecure-charcoal/50 transition-all duration-300 relative"
                    >
                      <span className="inline-block relative">
                        {item}
                        <div className="absolute bottom-0 left-0 w-0 h-px bg-devnsecure-teal group-hover:w-full transition-all duration-300"></div>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Database Strip */}
                <div className="mb-10 pb-10 border-b border-devnsecure-charcoal/50 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Database Systems</p>
                  <div className="flex gap-6 flex-wrap">
                    {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'].map((db) => (
                      <span key={db} className="text-gray-400 text-xs opacity-70">
                        {db}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Emphasis Line */}
                <div className="bg-devnsecure-charcoal/30 border border-devnsecure-charcoal/50 rounded p-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <p className="text-gray-300 text-sm font-mono">
                    Data models are designed from access patterns — not assumptions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: BACKEND SECURITY */}
          <section
            id="security"
            ref={(el) => {
              if (el) sectionRefs.current['security'] = el;
            }}
            className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 md:px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20 border-t border-devnsecure-charcoal/30"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12">
              <div className="hidden md:block flex-shrink-0">
                <span className="text-3xl font-bold text-devnsecure-teal/30">03</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-devnsecure-white mb-2 animate-fade-in-up">
                  Backend Security & Hardening
                </h2>
                <p className="text-xs md:text-sm italic text-gray-400 mb-6 md:mb-8 animate-fade-in-up">
                  Security is engineered into the system — not added later.
                </p>

                {/* Capability Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {[
                    'Secure authentication systems (JWT, RBAC)',
                    'API security hardening',
                    'Data encryption & protection',
                    'Payment security best practices',
                    'Vulnerability assessment & remediation',
                    'Secure configuration & environment setup',
                    'Logging, monitoring & audit trails',
                    'Compliance-ready backend practices',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group text-gray-300 text-sm py-3 px-4 rounded cursor-pointer hover:bg-devnsecure-charcoal/50 transition-all duration-300 relative"
                    >
                      <span className="inline-block relative">
                        {item}
                        <div className="absolute bottom-0 left-0 w-0 h-px bg-devnsecure-teal group-hover:w-full transition-all duration-300"></div>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Security Note */}
                <div className="bg-devnsecure-charcoal/30 border border-devnsecure-charcoal/50 rounded p-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <p className="text-gray-300 text-sm">
                    Focused on long-term trust, privacy, and system resilience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: WHY DEVNSECURE */}
          <section
            id="why"
            ref={(el) => {
              if (el) sectionRefs.current['why'] = el;
            }}
            className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 md:px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20 border-t border-devnsecure-charcoal/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-bold text-devnsecure-white mb-4 md:mb-6">
                  Why DevNsecure
                </h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  We are backend-first engineers.
                  <span className="block text-devnsecure-teal font-semibold mt-2">
                    Infrastructure before interfaces.
                  </span>
                </p>
              </div>

              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {[
                  'Backend-first expertise',
                  'Strong database fundamentals',
                  'Security-focused development',
                  'Clean, maintainable code',
                  'Transparent communication',
                  'Scalable & future-ready systems',
                ].map((strength, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-devnsecure-teal font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-300 text-sm">{strength}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: GET STARTED */}
          <section
            id="getstarted"
            ref={(el) => {
              if (el) sectionRefs.current['getstarted'] = el;
            }}
            className="pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20 px-4 md:px-6 lg:px-12 border-t border-devnsecure-charcoal/30 scroll-mt-20"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-devnsecure-white mb-4 md:mb-6 animate-fade-in-up">
                Ready to Build Something Unbreakable?
              </h2>
              <p className="text-xs md:text-base lg:text-lg text-gray-400 mb-8 md:mb-12 animate-fade-in-up">
                Let's discuss your backend architecture, security needs, and scalability requirements.
              </p>

              <button
                className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-devnsecure-teal text-devnsecure-teal font-semibold text-xs md:text-sm uppercase tracking-widest rounded transition-all duration-300 hover:bg-devnsecure-teal hover:text-devnsecure-black hover:shadow-lg hover:shadow-devnsecure-teal/30 animate-fade-in-up"
                onClick={() => {
                  document.dispatchEvent(new CustomEvent('open-consultation'));
                }}
              >
                → Request a Free Consultation
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
