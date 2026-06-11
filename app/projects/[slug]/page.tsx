import { projects } from '@/lib/projects';
import { ArrowLeft, Home, Code2, Archive, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { PDFPreviewCard } from '@/components/PDFPreviewCard';
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { ProjectNav } from '@/components/ProjectNav';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  console.log('Looking for slug:', slug);
  console.log(
    'Available slugs:',
    projects.map((p) => p.slug)
  );
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  // index of current project for project page navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1] ?? null;
  const nextProject = projects[currentIndex + 1] ?? null;

  return (
    <ProjectPageLayout currentIndex={currentIndex} total={projects.length}>
      <ProjectNav
        projects={projects}
        currentIndex={currentIndex}
        prevProject={prevProject}
        nextProject={nextProject}
      />
      <div className="h-full bg-neutral-100 flex items-center justify-center p-4 xl:p-6 pb-12 xl:pb-16 overflow-hidden">
        <div className="w-full max-w-7xl">
          <div className="flex relative gap-4 xl:gap-6 items-center">
            {/* left side content */}
            <div className="flex-1 flex flex-col justify-center p-3 xl:p-5 relative min-h-0">
              {project.mediaType === 'portfolio' && (
                <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-md">
                  {/* Decorative Circle */}
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full border-4 border-neutral-800 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                      <Home className="w-20 h-20 text-neutral-800" />
                    </div>
                    {/* Rotating Border */}
                    <div
                      className="absolute inset-0 w-48 h-48 rounded-full border-t-4 border-neutral-400 animate-spin"
                      style={{ animationDuration: '3s' }}
                    ></div>
                  </div>

                  {/* Text */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-neutral-800">
                      YOU'RE ALREADY HERE!
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      This is the portfolio website you're currently viewing.
                      Click below to return to the homepage.
                    </p>
                  </div>

                  {/* Button */}
                  <Link
                    href="/"
                    className="px-8 py-4 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-all hover:scale-105 flex items-center gap-3 group"
                  >
                    <Home className="w-5 h-5" />
                    <span className="font-medium">BACK TO HOME</span>
                    <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}

              {project.mediaType === 'video' && (
                <div className="flex flex-col pr-16 justify-center text-center space-y-8 w-full">
                  <video
                    src={project.mediaUrl}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {project.mediaType === 'link' && (
                <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-md">
                  <div className="relative">
                    <a
                      href={project.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-75 transition-opacity duration-200"
                    >
                    <svg
                      viewBox="0 0 48 48"
                      fill="none"
                      role="img"
                      width="192"
                      height="192"
                    >
                      <rect
                        x="12"
                        y="6"
                        width="8"
                        height="36"
                        rx="4"
                        fill="#2D3E9E"
                      />
                      <g transform="rotate(34 26 15)">
                        <path
                          d="M26 5.5C20.5 5.5 16 10 16 15.5 16 23.1 26 32.5 26 32.5S36 23.1 36 15.5C36 10 31.5 5.5 26 5.5Z M30 15.5A4 4 0 1 0 22 15.5A4 4 0 1 0 30 15.5Z"
                          fill="#8090D8"
                          fillRule="evenodd"
                        />
                      </g>
                    </svg>
                    </a>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-neutral-800">
                      THIS ONE'S LIVE.
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Pinnote is a real product. Click below to open the app.
                    </p>
                  </div>
                  <a
                    href={project.mediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-all hover:scale-105 flex items-center gap-3 group"
                  >
                    <span className="font-medium">OPEN PINNOTE</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              )}

              {project.mediaType === 'none' && (
                <div className="flex-1 flex items-center justify-center p-12 relative">
                  <div className="max-w-md text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-neutral-200 text-neutral-500">
                      <Archive className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-neutral-800">
                        Archived Project
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        Media unavailable for this early project
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {project.mediaType === 'pdf' && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200">
                  <PDFPreviewCard />
                </div>
              )}
            </div>

            {/* right side content */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl flex items-center">
                <div className="space-y-5">
                  <h1 className="text-4xl text-black font-bold tracking-tight">
                    {project.title}
                  </h1>
                  <p className="text-neutral-700 leading-relaxed uppercase tracking-wide text-sm">
                    {project.descriptionPage}
                  </p>
                  <div className="flex gap-3 text-sm uppercase tracking-wider text-neutral-600">
                    <span>{project.field}</span>
                    <span>|</span>
                    <span>{project.role}</span>
                  </div>
                  <div className="space-y-3 pt-2">
                    <h2 className="text-lg font-bold tracking-tight uppercase text-neutral-800">
                      Tech Stack
                    </h2>
                    <div className="grid grid-cols-2 gap-2">
                      {project.techStack.map((tech, index) => (
                        <div
                          key={tech.name}
                          className="p-3 bg-white/50 backdrop-blur border border-neutral-300 rounded-lg hover:border-neutral-800 hover:shadow-md transition-all group cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Code2 className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-neutral-800">
                                {tech.name}
                              </p>
                              <p className="text-xs text-neutral-500">
                                {tech.category}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectPageLayout>
  );
}
