import Link from 'next/link';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-black min-h-screen p-2 fixed inset-0">
      <main className="h-full bg-gray-100 rounded-2xl overflow-auto">
        {/* Fixed Navigation */}
        <div className="fixed py-7 px-11 z-50 flex top-0 left-0 right-0 items-center">
          <div className="text-base text-black font-bold">
            <Link href="/">RYAN CHIN</Link>
          </div>
          <nav className="flex text-xs gap-15 left-1/2 -translate-x-1/2 absolute rounded-full px-6 py-1 border border-gray-300 bg-gray-100">
            <Link
              href="/about-me"
              className="text-black hover:scale-90 transition-transform duration-200"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="text-black hover:scale-90 transition-transform duration-200"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-black hover:scale-90 transition-transform duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
}
