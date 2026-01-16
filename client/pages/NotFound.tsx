import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-devnsecure-black text-devnsecure-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-28 pb-20 px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">404</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            Page not found
          </p>
          <p className="text-base text-gray-500 mb-8">
            The path <code className="bg-devnsecure-charcoal px-2 py-1 rounded text-devnsecure-teal font-mono">{location.pathname}</code> does not exist.
          </p>
          <a
            href="/"
            className="inline-block btn-teal py-3 px-6 text-sm transition-colors duration-300"
          >
            Return to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
