import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
}

interface ProjectNavProps {
  projects: Project[];
  currentIndex: number;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectNav({
  projects,
  currentIndex,
  prevProject,
  nextProject,
}: ProjectNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6">
      <div className="w-64">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 group"
          >
            <ArrowLeft className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors duration-200" />
            <div className="flex flex-col">
              <span className="text-sm text-neutral-400 group-hover:text-black transition-colors duratation-200">
                Previous
              </span>
              <span className="text-sm font-bold text-neutral-600 group-hover:text-black transition-colors duration-200 truncate max-w-48">
                {prevProject.title}
              </span>
            </div>
          </Link>
        ) : (
          <div /> // preserve space when no previous project
        )}
      </div>

      {/* dot indicators */}
      <div className="flex items-center gap-2">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-4 h-4 bg-neutral-800' // current — larger filled dot
                : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-500' // other — smaller dot
            }`}
          />
        ))}
      </div>

      {/* next project */}
      <div className="w-64 flex justify-end">
        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col items-end">
              <span className="text-xs text-neutral-400 tracking-widest">
                NEXT
              </span>
              <span className="text-sm font-bold text-neutral-600 group-hover:text-black transition-colors duration-200 truncate max-w-48">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors duration-200" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
