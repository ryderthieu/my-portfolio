import React from "react";

interface LearningIconProps {
  className?: string;
}

const LearningIcon: React.FC<LearningIconProps> = ({
  className = "w-6 h-6",
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M12 22V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 15L12 12L16 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="8"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
      />
    </svg>
  );
};

export default LearningIcon;
