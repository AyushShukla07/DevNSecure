export default function FinalCTASection() {
  return (
    <section className="bg-devnsecure-black border-t border-[#26262C] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Message */}
        <h2 className="fade-in text-4xl md:text-5xl font-bold text-devnsecure-white mb-6">
          Your backend is your business.
        </h2>
        <p className="fade-in text-xl md:text-2xl text-gray-300 mb-12">
          We make it unbreakable.
        </p>

        {/* CTA Button */}
        <button
          className="fade-in btn-teal"
          onClick={() => {
            document.dispatchEvent(new CustomEvent('open-consultation'));
          }}
        >
          Talk to Engineers
        </button>

        {/* Secondary Text */}
        <p className="fade-in text-gray-500 text-sm mt-8 max-w-xl mx-auto">
          Let's discuss your next secure backend project and how DevNsecure can help you build with confidence.
        </p>
      </div>
    </section>
  );
}
