'use client';

export function NavLinks() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex text-xs gap-15 left-1/2 -translate-x-1/2 absolute rounded-full px-6 py-1 border border-gray-300 bg-gray-100">
      <button
        onClick={() => scrollTo('about-me')}
        className="text-black hover:scale-90 transition-transform duration-200"
      >
        About Me
      </button>
      <button
        onClick={() => scrollTo('projects')}
        className="text-black hover:scale-90 transition-transform duration-200"
      >
        Projects
      </button>
      <button
        onClick={() => scrollTo('contact')}
        className="text-black hover:scale-90 transition-transform duration-200"
      >
        Contact
      </button>
    </nav>
  );
}
