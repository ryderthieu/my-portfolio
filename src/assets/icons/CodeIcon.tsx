import React from "react";

interface CodeIconProps {
  className?: string;
}

const CodeIcon: React.FC<CodeIconProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
};

export default CodeIcon;
