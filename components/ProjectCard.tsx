interface ProjectCardProps {
  title: string;
  description: string;
  field: string;
  role: string;
}

export const ProjectCard = ({
  title,
  description,
  field,
  role,
}: ProjectCardProps) => {
  return (
    <div className="group relative w-[300px] h-[450px] border border-gray-300 rounded-3xl p-8 hover:bg-black transition-colors duration-300 flex-shrink-0 flex flex-col">
      <p className="text-gray-500 mb-6">{description}</p>
      <div className="absolute bottom-[80px] left-8 right-8 h-[160px] border-t border-b border-gray-300 py-4 mb-6">
        <h3 className="text-2xl font-bold text-black group-hover:text-white duration-300 mb-4">
          {title}
        </h3>
        <p className="text-gray-500">
          {field} | {role}
        </p>
      </div>

      <button className="mt-auto mx-auto px-4 py-2 bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-300 hover:scale-90 transition-all duration-300">
        View Project
      </button>
    </div>
  );
};
