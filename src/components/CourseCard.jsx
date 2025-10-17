import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

function CourseCard({ title, description, icon: Icon, color = "blue" }) {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic classes based on color prop
  const colorClasses = {
    blue: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-blue-600",
    amber:
      "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 text-amber-600",
    emerald:
      "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-600",
    purple:
      "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 text-purple-600",
    rose: "bg-gradient-to-br from-rose-50 to-rose-100 border-rose-200 text-rose-600",
    cyan: "bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 text-cyan-600",
  };

  const iconColorClass = colorClasses[color] || colorClasses.blue;
  const hoverColorClass = {
    blue: "gradient-blue",
    amber: "gradient-amber",
    emerald: "bg-gradient-to-r from-emerald-600 to-emerald-700",
    purple: "gradient-purple",
    rose: "bg-gradient-to-r from-rose-600 to-rose-700",
    cyan: "gradient-teal",
  };

  return (
    <div
      className="card hover:translate-y-[-5px] group hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 md:p-8 relative overflow-hidden glass flex flex-col items-center text-center">
        {/* Enhanced background animation */}
        <div
          className={`absolute inset-0 ${
            hoverColorClass[color] || hoverColorClass.blue
          } opacity-0 group-hover:opacity-10 transition-all duration-500`}
          style={{
            clipPath: isHovered
              ? "circle(150% at 100% 0)"
              : "circle(0% at 100% 0)",
            transition: "clip-path 0.5s ease-in-out, opacity 0.5s ease-in-out",
          }}
        ></div>

        <div
          className={`w-14 h-14 rounded-sm ${iconColorClass} flex items-center justify-center mb-4 border shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
        >
          <Icon
            className={`h-7 w-7 transition-transform duration-300 ${
              isHovered ? "scale-125" : ""
            }`}
          />
        </div>
        <h3 className="text-xl font-bold mb-3 relative z-10 text-center md:text-left">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 relative z-10 text-center md:text-justify">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center text-blue-600 font-medium hover:text-blue-700 relative z-10 overflow-hidden group-hover:font-semibold transition-all duration-300 group-hover:underline underline-offset-4 mx-auto"
        >
          Learn more
          <ChevronRight
            className={`h-4 w-4 ml-1 transition-all duration-300 ${
              isHovered ? "translate-x-1 scale-110" : ""
            }`}
          />
        </a>
      </div>
    </div>
  );
}

export default CourseCard;
