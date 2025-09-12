import React from "react";
import { useTranslation } from "react-i18next";
import profileImage from "../../assets/profile-image.png";
import {
  LearningIcon,
  ExperienceIcon,
  InnovationIcon,
} from "../../assets/icons";

const About: React.FC = () => {
  const { t } = useTranslation("about");

  const education = {
    school: t("education.school"),
    major: t("education.major"),
    gpa: t("education.gpa"),
    year: t("education.year"),
    status: t("education.status"),
    languageTitle: t("education.languageTitle"),
    language: t("education.language", { returnObjects: true }) as string[],
  };

  const experience = {
    year: t("experience.year"),
    title: t("experience.title"),
    company: t("experience.company"),
    description: t("experience.description"),
  };

  const highlights = [
    { icon: LearningIcon, text: t("highlight1") },
    { icon: ExperienceIcon, text: t("highlight2") },
    { icon: InnovationIcon, text: t("highlight3") },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br dark:bg-gradient-to-tr from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t("title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start mb-20">
          <div className="space-y-8">
            <div className="relative group">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 via-purple-200/30 to-pink-200/30 dark:from-blue-800/20 dark:via-purple-800/20 dark:to-pink-800/20 rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-green-200/30 via-blue-200/30 to-purple-200/30 dark:from-green-800/20 dark:via-blue-800/20 dark:to-purple-800/20 rounded-3xl -rotate-6 group-hover:-rotate-3 transition-transform duration-500"></div>

                <div className="relative aspect-square rounded-3xl overflow-hidden border-8 border-white/50 dark:border-gray-700/50 backdrop-blur-sm shadow-2xl group-hover:scale-105 transition-transform duration-500 z-1">
                  <img
                    src={profileImage}
                    alt={t("imageAlt")}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `
                         <div class="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                           <div class="text-white text-6xl font-bold">
                             ${t("name").charAt(0)}
                           </div>
                         </div>
                       `;
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="absolute inset-0 rounded-3xl border-2 border-blue-300/30 dark:border-blue-600/30 animate-spin-slow"></div>
                <div className="absolute inset-0 rounded-3xl border border-purple-300/50 dark:border-purple-600/50 animate-ping"></div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {t("description1")}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {t("description2")}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("description3")}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t("educationTitle")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-sm text-blue-500 font-semibold">
                    {education.year}
                  </div>
                  <div className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-xs rounded-full">
                    {education.status}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {education.school}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                    {education.major}
                  </p>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        GPA:
                      </span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded">
                        {education.gpa}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {education.languageTitle}:
                      </span>
                      {education.language.map((language, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-pink-200 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 text-sm font-semibold rounded"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t("highlightsTitle")}
          </h3>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              const gradients = [
                "from-blue-500 via-indigo-500 to-purple-500",
                "from-green-500 via-teal-500 to-cyan-500",
                "from-orange-500 via-pink-500 to-rose-500",
              ];
              const glowColors = [
                "shadow-blue-500/25",
                "shadow-green-500/25",
                "shadow-pink-500/25",
              ];

              return (
                <div
                  key={index}
                  className="group relative text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradients[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div
                    className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${gradients[index]} rounded-2xl mb-6 shadow-lg ${glowColors[index]} group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {highlight.text}
                  </p>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t("experienceTitle")}
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-blue-500 font-semibold mb-2">
                {experience.year}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {experience.title}
              </h4>
              <div className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                {experience.company}
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
