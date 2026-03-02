interface ProjectPageLayoutProps {
  title: string;
  description: string;
  field: string;
  role: string;
  technologies: string[];
  visualContent: React.ReactNode;
}

export const ProjectPageLayout = ({
  title,
  description,
  field,
  role,
  technologies,
  visualContent,
}: ProjectPageLayoutProps) => {
  return (
    <div className="h-screen flex items-center justifyf-center bg-white">
      <div className="w-full h-full flex">
        {/* left side content */}
        <div className="w-1/2 h-full flex flex-col justify-center bg-gray-50">
          {visualContent}
        </div>

        {/* right side content */}
        <div className="w-1/2 h-full flex flex-col justify-center px-20">
          <h1 className="text-5xl font-bold text-black mb-6">{title}</h1>
          <p className="text-gray-600 mb-8">{description}</p>

          <div className="mb-8">
            <p className="text-gray-500">
              {field} | {role}
            </p>
          </div>

          {technologies && (
            <div className="flex flex-wrap gap-2 mb-8">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-gray-300 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
