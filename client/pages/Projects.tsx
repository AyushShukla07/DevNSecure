'use client';

import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Project {
  id: number;
  name: string;
  systemType: string;
  engineeringFocus: string[];
  description: string;
  concepts: string;
  challenge: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Event-Driven Notification System',
    systemType: 'EVENT-DRIVEN ARCHITECTURE',
    engineeringFocus: [
      'Event producers & consumers',
      'Message reliability',
      'Decoupled services',
    ],
    description: 'Real-time notification system designed around asynchronous event flows.',
    concepts: 'Event queues, async processing, fault tolerance',
    challenge: 'Ensures reliable event delivery and service decoupling at scale',
  },
  {
    id: 2,
    name: 'Subscription Billing System',
    systemType: 'SAAS BILLING ENGINE',
    engineeringFocus: [
      'Billing cycles',
      'Idempotent transactions',
      'Failure handling',
    ],
    description:
      'Automated subscription billing system handling recurring payments and lifecycle events.',
    concepts: 'Recurring payments, state machines, data integrity',
    challenge: 'Maintains payment integrity and handles failure scenarios gracefully',
  },
  {
    id: 3,
    name: 'Subscription Tracker',
    systemType: 'FINANCIAL TRACKING SYSTEM',
    engineeringFocus: [
      'Data modeling',
      'Scheduled jobs',
      'Alerting logic',
    ],
    description: 'Tracks and manages user subscriptions with renewal alerts and cost visibility.',
    concepts: 'Cron workflows, financial data accuracy',
    challenge: 'Ensures accurate tracking and timely alerts for subscription lifecycle events',
  },
  {
    id: 4,
    name: 'Payment Gateway Engine',
    systemType: 'PAYMENT INFRASTRUCTURE',
    engineeringFocus: [
      'Secure payment flows',
      'Transaction verification',
      'Failure rollback',
    ],
    description: 'Backend payment engine handling secure transaction processing and validation.',
    concepts: 'Payment security, idempotency, API validation',
    challenge: 'Provides secure, idempotent payment processing with automatic rollback',
  },
  {
    id: 5,
    name: 'Sahayak',
    systemType: 'SERVICE PLATFORM',
    engineeringFocus: [
      'Backend APIs',
      'Role-based access',
      'Scalable architecture',
    ],
    description: 'A platform designed to connect users with assistance services efficiently.',
    concepts: 'RBAC, modular backend design',
    challenge: 'Scales horizontally while maintaining strict access control',
  },
  {
    id: 6,
    name: 'Real-Estate Platform',
    systemType: 'DATA-DRIVEN PLATFORM',
    engineeringFocus: [
      'Complex data models',
      'Search & filtering',
      'Secure data access',
    ],
    description: 'Property listing and management backend with structured data handling.',
    concepts: 'Relational data modeling, performance optimization',
    challenge: 'Models complex relationships and optimizes for fast, filtered searches',
  },
  {
    id: 7,
    name: 'NearMe',
    systemType: 'HYPERLOCAL PLATFORM',
    engineeringFocus: [
      'Geospatial queries',
      'High-read traffic handling',
      'Low-latency APIs',
    ],
    description: 'Location-based discovery system for nearby services and businesses.',
    concepts: 'Location indexing, scalable read paths',
    challenge: 'Delivers location-based results with sub-100ms latency at scale',
  },
  {
    id: 8,
    name: 'AlphaEdge',
    systemType: 'ANALYTICS PLATFORM',
    engineeringFocus: [
      'Data pipelines',
      'Aggregation logic',
      'Performance tuning',
    ],
    description: 'Analytics-driven system focused on data processing and insight generation.',
    concepts: 'Analytics processing, system optimization',
    challenge: 'Processes massive datasets for real-time analytical insights',
  },
  {
    id: 9,
    name: 'Collaborative Code Editor',
    systemType: 'REAL-TIME COLLABORATION SYSTEM',
    engineeringFocus: [
      'WebSockets',
      'Concurrency handling',
      'State synchronization',
    ],
    description: 'Multi-user code editor enabling real-time collaboration.',
    concepts: 'Real-time sync, conflict resolution',
    challenge: 'Synchronizes concurrent edits with zero data loss',
  },
  {
    id: 10,
    name: 'Chat Application (WebSockets)',
    systemType: 'REAL-TIME COMMUNICATION',
    engineeringFocus: [
      'Persistent connections',
      'Message ordering',
      'Scalability',
    ],
    description: 'Low-latency chat system built using WebSockets.',
    concepts: 'WebSocket lifecycle, real-time messaging',
    challenge: 'Maintains message ordering across distributed instances',
  },
];

function ProjectQueueItem({
  project,
  isActive,
  onClick,
}: {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-4 border-l-2 transition-all duration-300 whitespace-nowrap md:whitespace-normal ${
        isActive
          ? 'border-l-devnsecure-teal bg-devnsecure-charcoal/40'
          : 'border-l-transparent hover:bg-devnsecure-charcoal/20'
      }`}
    >
      <div className="flex flex-col gap-1">
        <h4
          className={`text-sm font-semibold transition-colors duration-300 ${
            isActive ? 'text-devnsecure-teal' : 'text-gray-300'
          }`}
        >
          {project.name}
        </h4>
        <span
          className={`text-xs font-mono tracking-widest transition-colors duration-300 ${
            isActive ? 'text-devnsecure-teal/80' : 'text-gray-500'
          }`}
        >
          {project.systemType}
        </span>
      </div>
    </button>
  );
}

function ActiveProjectDetail({ project }: { project: Project }) {
  return (
    <div className="space-y-8 animate-fadeInSlide">
      {/* Header Section */}
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-devnsecure-white">
          {project.name}
        </h2>
        <span className="inline-block text-xs font-mono text-devnsecure-teal tracking-widest">
          {project.systemType}
        </span>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <p className="text-base text-gray-300 leading-relaxed">{project.description}</p>
      </div>

      {/* Three Sections Grid */}
      <div className="grid md:grid-cols-2 gap-8 pt-4">
        {/* Engineering Focus */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono text-devnsecure-teal tracking-widest">
            ENGINEERING FOCUS
          </h3>
          <ul className="space-y-2">
            {project.engineeringFocus.map((focus, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-devnsecure-teal mt-0.5 flex-shrink-0">•</span>
                <span>{focus}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Concepts */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono text-devnsecure-teal tracking-widest">
            KEY CONCEPTS
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">{project.concepts}</p>
        </div>
      </div>

      {/* Primary Challenge */}
      <div className="space-y-3 pt-4 border-t border-devnsecure-charcoal">
        <h3 className="text-xs font-mono text-devnsecure-teal tracking-widest">
          PRIMARY CHALLENGE SOLVED
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">{project.challenge}</p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-devnsecure-charcoal">
        <p className="text-xs text-gray-500 italic">Engineered, not demoed.</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];
  const queueScrollRef = useRef<HTMLDivElement>(null);

  // Scroll active item into view on mobile
  useEffect(() => {
    if (queueScrollRef.current) {
      const activeItem = queueScrollRef.current.querySelector('[data-active="true"]');
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  }, [activeProjectId]);

  return (
    <div className="min-h-screen bg-devnsecure-black text-devnsecure-white overflow-x-hidden">
      <Header />

      <main className="pt-28 pb-20">
        {/* Page Intro */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 mb-12 text-center flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-left">OUR PROJECTS</h1>
          <p className="text-lg text-gray-400 max-w-2xl text-center">
            Systems we've engineered to solve real-world problems — with scale, security, and
            correctness in mind.
          </p>
        </section>

        {/* Two-Panel Layout */}
        <section className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Desktop: Horizontal split layout */}
          <div className="hidden lg:grid lg:grid-cols-[320px_1fr] lg:gap-12">
            {/* Left Panel: Project Queue */}
            <div className="space-y-2 max-h-[600px] overflow-y-auto border-r border-devnsecure-charcoal pr-4">
              {projects.map((project) => (
                <ProjectQueueItem
                  key={project.id}
                  project={project}
                  isActive={activeProjectId === project.id}
                  onClick={() => setActiveProjectId(project.id)}
                />
              ))}
            </div>

            {/* Right Panel: Active Project Detail */}
            <div className="pb-8">
              <ActiveProjectDetail project={activeProject} />
            </div>
          </div>

          {/* Tablet/Mobile: Vertical stacked layout with horizontal scroll queue */}
          <div className="lg:hidden space-y-8">
            {/* Project Queue - Horizontal Scroll */}
            <div
              ref={queueScrollRef}
              className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:px-6 scrollbar-hide"
            >
              {projects.map((project) => (
                <button
                  key={project.id}
                  data-active={activeProjectId === project.id ? 'true' : 'false'}
                  onClick={() => setActiveProjectId(project.id)}
                  className={`flex-shrink-0 px-4 py-3 rounded border transition-all duration-300 ${
                    activeProjectId === project.id
                      ? 'border-devnsecure-teal bg-devnsecure-charcoal/40'
                      : 'border-devnsecure-charcoal hover:border-devnsecure-charcoal/60'
                  }`}
                >
                  <div className="flex flex-col gap-1 min-w-[200px] md:min-w-[250px]">
                    <h4
                      className={`text-sm font-semibold transition-colors duration-300 whitespace-normal ${
                        activeProjectId === project.id
                          ? 'text-devnsecure-teal'
                          : 'text-gray-300'
                      }`}
                    >
                      {project.name}
                    </h4>
                    <span
                      className={`text-xs font-mono tracking-widest transition-colors duration-300 ${
                        activeProjectId === project.id
                          ? 'text-devnsecure-teal/80'
                          : 'text-gray-500'
                      }`}
                    >
                      {project.systemType}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Project Detail - Full Width Below */}
            <div className="pt-6 border-t border-devnsecure-charcoal">
              <ActiveProjectDetail project={activeProject} />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInSlide {
          animation: fadeInSlide 0.4s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
