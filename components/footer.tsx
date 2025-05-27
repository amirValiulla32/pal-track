import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              Built to bear witness. © {new Date().getFullYear()} PalTrack —{" "}
              <a
                href="mailto:contact@paltrack.dev"
                className="text-blue-400 underline hover:text-blue-300 transition-colors"
              >
                contact@paltrack.dev
              </a>
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
              About
            </Link>
            <Link href="/methodology" className="text-gray-400 hover:text-white transition-colors text-sm">
              Methodology
            </Link>
            <Link href="/sources" className="text-gray-400 hover:text-white transition-colors text-sm">
              Sources
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            This platform is dedicated to documenting truth through verifiable evidence and rigorous analysis.
          </p>
        </div>
      </div>
    </footer>
  )
}
