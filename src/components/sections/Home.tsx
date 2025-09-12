import React from "react";
import { useTranslation } from "react-i18next";
import profileImage from "../../assets/profile-image.png";
import {
  LocationIcon,
  DownloadIcon,
  ChevronRightIcon,
  CodeIcon,
  BugIcon,
} from "../../assets/icons";
import { useTypingEffect } from "../../hooks/useTypingEffect";
const Home: React.FC = () => {
  const { t } = useTranslation("home");
  const { displayedText: hello, isCompleted: helloCompleted } = useTypingEffect(
    {
      text: t("hello"),
      speed: 100,
      delay: 200,
    }
  );
  const { displayedText: name, isCompleted: nameCompleted } = useTypingEffect({
    text: t("name"),
    speed: 100,
    delay: helloCompleted ? 200 : 9999,
  });
  const handleDownloadCV = () => {
    const cvUrl = "/cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_YourName.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewWork = () => {
    const projectsSection = document.getElementById("project");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 dark:from-blue-600/3 dark:to-purple-600/3 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {t("greeting")}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              <span className="block">
                {hello}
                {!helloCompleted && <span className="font-thin">_</span>}
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                {name}
                {helloCompleted && !nameCompleted && (
                  <span className="font-thin">_</span>
                )}
              </span>
            </h1>

            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {t("position")}
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-400">
                <LocationIcon className="w-4 h-4" />
                <span className="text-sm font-medium">{t("location")}</span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 ">
              {t("description")}
            </p>

            <div className="flex flex-col lg:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={handleDownloadCV}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
              >
                <DownloadIcon className="w-5 h-5 group-hover:animate-bounce" />
                {t("downloadCV")}
              </button>

              <button
                onClick={handleViewWork}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                {t("viewWork")}
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full"></div>

                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src={profileImage}
                    alt={t("imageAlt")}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <div class="text-white text-6xl font-bold">
                            ${t("name").charAt(0)}
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>

                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <CodeIcon className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <BugIcon className="w-6 h-6 text-white" />
                </div>

                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-ping">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
