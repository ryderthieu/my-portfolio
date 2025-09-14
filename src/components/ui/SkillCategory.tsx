import React from "react";
import SkillItem, { type SkillItemProps } from "./SkillItem";

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: SkillItemProps[];
  categoryColor: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  description,
  skills,
  categoryColor,
}) => {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
        <div
          className={`w-24 h-1 ${categoryColor} rounded-full mx-auto mt-4`}
        ></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillItem key={skill.name} {...skill} delay={index * 100} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
export type { SkillCategoryProps };
