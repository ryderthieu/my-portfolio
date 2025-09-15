import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import ProjectCard from "../ui/ProjectCard";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons";
import portfolioImage from "../../assets/images/portfolio.png";
import cookingImage from "../../assets/images/cooking.png";
import hospitalImage from "../../assets/images/hospital.png";
import japaneseImage from "../../assets/images/japanese.png";
import tutorImage from "../../assets/images/tutor.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Projects: React.FC = () => {
  const { t } = useTranslation("projects");
  const swiperRef = useRef<SwiperType>(null);

  const projectsData = [
    {
      key: "portfolio",
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      technologies: t("projects.portfolio.technologies", {
        returnObjects: true,
      }) as string[],
      role: t("projects.portfolio.role"),
      githubUrl: "https://github.com/ryderthieu/my-portfolio",
      imageUrl: portfolioImage,
    },
    {
      key: "cooking-network",
      title: t("projects.cooking-network.title"),
      description: t("projects.cooking-network.description"),
      technologies: t("projects.cooking-network.technologies", {
        returnObjects: true,
      }) as string[],
      role: t("projects.cooking-network.role"),
      githubUrl:
        "https://github.com/ryderthieu/hcm_9-naitei-nodejs-cooking_social_network",
      imageUrl: cookingImage,
    },
    {
      key: "hospital",
      title: t("projects.hospital.title"),
      description: t("projects.hospital.description"),
      technologies: t("projects.hospital.technologies", {
        returnObjects: true,
      }) as string[],
      role: t("projects.hospital.role"),
      githubUrl: "https://github.com/ryderthieu/hospital-management",
      imageUrl: hospitalImage,
    },
    {
      key: "japanese-app",
      title: t("projects.japanese-app.title"),
      description: t("projects.japanese-app.description"),
      technologies: t("projects.japanese-app.technologies", {
        returnObjects: true,
      }) as string[],
      role: t("projects.japanese-app.role"),
      githubUrl: "https://github.com/ryderthieu/japanese-learning-app",
      imageUrl: japaneseImage,
    },
    {
      key: "tutor",
      title: t("projects.tutor.title"),
      description: t("projects.tutor.description"),
      technologies: t("projects.tutor.technologies", {
        returnObjects: true,
      }) as string[],
      role: t("projects.tutor.role"),
      githubUrl: "https://github.com/ryderthieu/SeiSei",
      imageUrl: tutorImage,
    },
  ];

  return (
    <section
      id="project"
      className="py-20 bg-gradient-to-br dark:bg-gradient-to-tr from-purple-50 via-cyan-50 to-white dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/5 dark:bg-green-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 group">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t("title")}
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`absolute left-4 hidden group-hover:block top-1/2 -translate-y-1/2 z-10 group p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600`}
          >
            <ArrowLeftIcon
              size={20}
              className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer"
            />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`absolute right-4 hidden group-hover:block top-1/2 -translate-y-1/2 z-10 group p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600`}
          >
            <ArrowRightIcon
              size={20}
              className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer"
            />
          </button>
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 120,
              modifier: 1.5,
              slideShadows: true,
            }}
            speed={800}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            }}
            style={{ paddingBottom: "60px" }}
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.key} className="h-auto">
                <div className="h-full">
                  <ProjectCard
                    projectKey={project.key}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    role={project.role}
                    githubUrl={project.githubUrl}
                    imageUrl={project.imageUrl}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
