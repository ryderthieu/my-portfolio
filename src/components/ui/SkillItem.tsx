import React from "react";

interface SkillItemProps {
  name: string;
  level: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  delay: number;
}

const SkillItem: React.FC<SkillItemProps> = ({
  name,
  level,
  description,
  icon: IconComponent,
  iconColor,
  delay,
}) => {
  const getLevelWidth = (level: string) => {
    switch (level.toLowerCase()) {
      case "thành thạo":
      case "expert":
      case "エキスパート":
        return "w-full";
      case "tốt":
      case "advanced":
      case "上級":
        return "w-3/4";
      case "trung bình":
      case "intermediate":
      case "中級":
        return "w-1/2";
      case "cơ bản":
      case "beginner":
      case "初級":
        return "w-1/4";
      default:
        return "w-1/2";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "thành thạo":
      case "expert":
      case "エキスパート":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "tốt":
      case "advanced":
      case "上級":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "trung bình":
      case "intermediate":
      case "中級":
        return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "cơ bản":
      case "beginner":
      case "初級":
        return "bg-gradient-to-r from-gray-500 to-slate-500";
      default:
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
    }
  };

  return (
    <div
      className={`group bg-white/80 dark:bg-gray-800/80  backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-lg border-t-1 border-gray-100 dark:border-none group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
          <IconComponent className="text-3xl" style={{ color: iconColor }} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 h-10 leading-5">
            {description}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Skill Level
          </span>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {level}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full ${getLevelColor(level)} ${getLevelWidth(
              level
            )} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
            style={{ animationDelay: `${delay + 200}ms` }}
          ></div>
        </div>
      </div>

      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default SkillItem;
export type { SkillItemProps };
