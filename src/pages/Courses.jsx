import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import {
  courses,
  feeStructure,
  feeIncludes,
  programHighlights,
} from "../data/courses";
import {
  TargetIcon,
  TrendingUp,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import RegistrationModal from "../components/RegistrationModal";

function Courses() {
  const [filter, setFilter] = useState("all");
  const [showRegModal, setShowRegModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [expandedLocations, setExpandedLocations] = useState({});

  const filteredCourses =
    filter === "all"
      ? courses
      : courses.filter((course) => course.category === filter);

  const handleRegisterClick = (program) => {
    setSelectedProgram(program);
    setShowRegModal(true);
  };

  const toggleLocations = (courseId) => {
    setExpandedLocations((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  return (
    <div className="fade-in">
      <HeroSection
        title="NMDC Leadership Programs"
        subtitle="Executive development programs designed to advance NMDC leaders from operational managers to strategic leaders"
        backgroundImage="/WhatsApp Image 2025-08-28 at 12.36.39_40a7a60b.png"
        ctaLink="/courses"
        className="text-center"
      />

      {/* Filters */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 touch-manipulation ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 hover:shadow-sm"
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setFilter("leadership")}
              className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 touch-manipulation ${
                filter === "leadership"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 hover:shadow-sm"
              }`}
            >
              Leadership Programs
            </button>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="container px-4 sm:px-6 py-12 sm:py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:gap-12">
          {filteredCourses.map((course) => {
            const Icon = course.id === 1 ? TrendingUp : TargetIcon;

            return (
              <div
                key={course.id}
                className="overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="grid grid-cols-1 lg:grid-cols-7">
                  <div className="flex flex-col gap-4 sm:gap-3 justify-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 via-blue-100 to-white lg:col-span-2">
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 text-blue-600 bg-white rounded-full border border-blue-100 shadow-sm">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                    </div>
                    <div className="text-center lg:text-left">
                      <h2 className="text-lg font-semibold text-blue-900 sm:text-2xl">
                        {course.title}
                      </h2>
                      <p className="mt-1 text-sm sm:text-base text-blue-700/90 leading-relaxed">
                        {course.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 lg:col-span-5 animate-fade-in">
                    <div className="flex gap-3 items-center transition-all duration-300 hover:scale-105">
                      <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-500">
                          Duration
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-gray-900">
                          {course.duration}
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
                      <div className="animate-slide-in-left">
                        <h3 className="mb-2 text-sm sm:text-base font-semibold text-gray-600">
                          Program Structure
                        </h3>
                        <ul className="pl-4 sm:pl-5 space-y-2 text-sm sm:text-base list-disc text-gray-700">
                          {course.days.map((day, index) => (
                            <li
                              key={index}
                              className="transition-all duration-200 hover:translate-x-1 hover:bg-gray-50 p-2 rounded"
                            >
                              <span className="font-semibold text-gray-900">
                                {day.day}:
                              </span>{" "}
                              {day.theme}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="animate-slide-in-right">
                        <h3 className="mb-2 text-sm sm:text-base font-semibold text-gray-600">
                          Locations & Dates
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                          {(expandedLocations[course.id]
                            ? course.locations
                            : course.locations.slice(0, 3)
                          ).map((location, index) => (
                            <li
                              key={index}
                              className="flex flex-col p-2 rounded transition-all duration-200 hover:bg-gray-50"
                            >
                              <span className="font-semibold text-gray-900">
                                {location.place}
                              </span>
                              <span className="text-gray-500">
                                {location.dates}
                              </span>
                            </li>
                          ))}
                        </ul>
                        {course.locations.length > 3 && (
                          <button
                            onClick={() => toggleLocations(course.id)}
                            className="inline-flex gap-2 items-center mt-3 text-sm sm:text-base font-semibold text-blue-600 transition-all duration-300 hover:text-blue-800 hover:scale-105 touch-manipulation"
                          >
                            {expandedLocations[course.id] ? (
                              <>
                                <ChevronUp className="w-4 h-4 transition-transform duration-200 hover:rotate-180" />
                                Show fewer locations
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4 transition-transform duration-200 hover:rotate-180" />
                                View {course.locations.length - 3} more
                                locations
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-2 items-start sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        Contact us for the latest schedule details and seat
                        availability.
                      </p>
                      <button
                        onClick={() => handleRegisterClick(course)}
                        className="inline-flex justify-center items-center px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold text-blue-600 whitespace-nowrap rounded-full border border-blue-500 transition-all duration-300 hover:bg-blue-50 hover:shadow-md touch-manipulation self-start sm:self-auto"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-12 sm:py-16 bg-gray-50 animate-fade-in">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center text-gray-800 animate-slide-in-left">
            Fee Structure
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 mx-auto max-w-4xl md:grid-cols-2">
            {feeStructure.map((fee, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-white rounded-xl border border-gray-100 shadow-lg"
              >
                <h3 className="mb-3 text-xl sm:text-2xl font-bold text-gray-800">
                  {fee.category}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-600 text-sm sm:text-base">
                  {fee.description}
                </p>
                <p className="mb-4 text-2xl sm:text-3xl font-bold text-blue-600">
                  {fee.priceFormatted}
                </p>

                <div className="space-y-2 sm:space-y-3">
                  {feeIncludes.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start p-2 rounded border border-blue-100 bg-blue-50/40"
                    >
                      <div className="flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Registration Modal */}
      <RegistrationModal
        isOpen={showRegModal}
        onClose={() => setShowRegModal(false)}
        program={selectedProgram}
      />
    </div>
  );
}

export default Courses;
