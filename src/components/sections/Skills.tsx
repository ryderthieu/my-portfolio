import React from "react";
import { useTranslation } from "react-i18next";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiSpring,
  SiGit,
  SiPostman,
} from "react-icons/si";
import FigmaIcon from "../../assets/icons/FigmaIcon";
import SkillCategory from "../ui/SkillCategory";
import type { SkillItemProps } from "../ui/SkillItem";
import JavaIcon from "../../assets/icons/JavaIcon";
import PythonIcon from "../../assets/icons/PythonIcon";

const Skills: React.FC = () => {
  const { t } = useTranslation("skills");

  const skillsData = {
    languages: [
      {
        name: t("skills.javascript.name"),
        level: t("skills.javascript.level"),
        description: t("skills.javascript.description"),
        icon: SiJavascript,
        iconColor: "#F7DF1E",
      },
      {
        name: t("skills.typescript.name"),
        level: t("skills.typescript.level"),
        description: t("skills.typescript.description"),
        icon: SiTypescript,
        iconColor: "#3178C6",
      },
      {
        name: t("skills.java.name"),
        level: t("skills.java.level"),
        description: t("skills.java.description"),
        icon: JavaIcon,
        iconColor: "#ED8B00",
      },
      {
        name: t("skills.cpp.name"),
        level: t("skills.cpp.level"),
        description: t("skills.cpp.description"),
        icon: SiCplusplus,
        iconColor: "#00599C",
      },
      {
        name: t("skills.python.name"),
        level: t("skills.python.level"),
        description: t("skills.python.description"),
        icon: PythonIcon,
        iconColor: "#3776AB",
      },
    ] as SkillItemProps[],
    frameworks: [
      {
        name: t("skills.react.name"),
        level: t("skills.react.level"),
        description: t("skills.react.description"),
        icon: SiReact,
        iconColor: "#61DAFB",
      },
      {
        name: t("skills.tailwindcss.name"),
        level: t("skills.tailwindcss.level"),
        description: t("skills.tailwindcss.description"),
        icon: SiTailwindcss,
        iconColor: "#06B6D4",
      },
      {
        name: t("skills.reactnative.name"),
        level: t("skills.reactnative.level"),
        description: t("skills.reactnative.description"),
        icon: SiReact,
        iconColor: "#61DAFB",
      },
      {
        name: t("skills.express.name"),
        level: t("skills.express.level"),
        description: t("skills.express.description"),
        icon: SiExpress,
        iconColor: "#000000",
      },
      {
        name: t("skills.nestjs.name"),
        level: t("skills.nestjs.level"),
        description: t("skills.nestjs.description"),
        icon: SiNestjs,
        iconColor: "#E0234E",
      },
      {
        name: t("skills.springboot.name"),
        level: t("skills.springboot.level"),
        description: t("skills.springboot.description"),
        icon: SiSpring,
        iconColor: "#6DB33F",
      },
    ] as SkillItemProps[],
    tools: [
      {
        name: t("skills.git.name"),
        level: t("skills.git.level"),
        description: t("skills.git.description"),
        icon: SiGit,
        iconColor: "#F05032",
      },
      {
        name: t("skills.figma.name"),
        level: t("skills.figma.level"),
        description: t("skills.figma.description"),
        icon: FigmaIcon,
        iconColor: "#F24E1E",
      },
      {
        name: t("skills.postman.name"),
        level: t("skills.postman.level"),
        description: t("skills.postman.description"),
        icon: SiPostman,
        iconColor: "#FF6C37",
      },
    ] as SkillItemProps[],
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-br  from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20  dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 dark:bg-green-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t("title")}
          </h2>
        </div>

        <div className="space-y-20">
          <SkillCategory
            title={t("categories.languages.title")}
            description={t("categories.languages.description")}
            skills={skillsData.languages}
            categoryColor="bg-gradient-to-r from-purple-500 to-pink-500"
          />

          <SkillCategory
            title={t("categories.frameworks.title")}
            description={t("categories.frameworks.description")}
            skills={skillsData.frameworks}
            categoryColor="bg-gradient-to-r from-blue-500 to-purple-500"
          />

          <SkillCategory
            title={t("categories.tools.title")}
            description={t("categories.tools.description")}
            skills={skillsData.tools}
            categoryColor="bg-gradient-to-r from-green-500 to-teal-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
