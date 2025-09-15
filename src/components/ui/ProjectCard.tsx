import React from "react";
import { useTranslation } from "react-i18next";
import { GitHubIcon } from "../../assets/icons";

interface ProjectCardProps {
  projectKey: string;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  githubUrl: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  role,
  githubUrl,
  imageUrl,
}) => {
  const { t } = useTranslation("projects");

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col min-h-[400px]">
      <div className="h-48 w-full overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </div>

        <div className="mb-3">
          <span className="inline-block px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-100 dark:border-blue-800">
            {role}
          </span>
        </div>

        <div className="mb-4 flex-1">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm h-18 overflow-y-auto">
            {description}
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">
            {t("technologies")}
          </h4>
          <div className="flex flex-wrap gap-1 min-h-[60px] content-start">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-100 dark:border-gray-600 h-fit"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-gray-900 hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-sm"
          >
            <GitHubIcon />
            {t("viewCode")}
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
