export default function HeroSection() {
  return (
    <section className="min-h-screen bg-devnsecure-black flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 text-center">
        {/* Main Headline */}
        <h1 className="fade-in mb-6 text-devnsecure-white">
          Secure Backend Engineering for Systems That Must Not Fail
        </h1>

        {/* Subheading */}
        <p className="fade-in text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          We design, build, and harden backend systems for startups, SaaS platforms, and security-critical products.
        </p>

        {/* CTA Buttons */}
        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="btn-teal"
            onClick={() => {
              document.dispatchEvent(new CustomEvent('open-consultation'));
            }}
          >
            Start a Secure Build
          </button>
          <button
            className="btn-text"
            onClick={() => {
              const element = document.getElementById('architecture');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View Our Architecture
          </button>
        </div>
      </div>
    </section>
  );
}
