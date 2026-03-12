import Link from 'next/link';
import { NavLinks } from './NavLinks';

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
          <NavLinks />
        </div>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
}
