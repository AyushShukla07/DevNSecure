export default function Footer() {
  return (
    <footer className="bg-devnsecure-black border-t border-[#26262C] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fdaf81e0a6f2c49548b7ed14d4b7cae10%2Fa08330a3516b467485251fab9ebea3fa?format=webp&width=800"
              alt="DevNSecure"
              className="w-16 h-16"
            />
            <p className="text-gray-500 text-sm">Elite Engineering Boutique</p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} DevNSecure. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Building secure backends for systems that cannot fail.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
