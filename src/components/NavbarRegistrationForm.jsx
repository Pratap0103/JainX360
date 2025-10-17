import React, { useState, useEffect, useRef } from "react";
import {
  X,
  TrendingUp,
  Zap,
  Users,
  BookOpen,
  TargetIcon,
  MessageSquare,
} from "lucide-react";
import { courses } from "../data/courses";

function RegistrationModal({ isOpen, onClose, selectedProgram }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: selectedProgram ? selectedProgram.id.toString() : "",
    message: "",
  });

  const modalRef = useRef(null);

  // Update form data when selectedProgram changes
  useEffect(() => {
    if (selectedProgram) {
      setFormData((prev) => ({
        ...prev,
        program: selectedProgram.id.toString(),
      }));
    }
  }, [selectedProgram]);

  // Handle outside click to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Prevent page shift when scrollbar hides
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "",
      message: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm overflow-hidden">
      <div
        ref={modalRef}
        className="relative w-full max-w-[400px] bg-white rounded-md shadow-2xl overflow-hidden transform transition-all duration-300 animate-zoomIn border border-blue-100 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="relative">
          <div className="gradient-blue p-6 text-white relative overflow-hidden">
            <div className="shimmer absolute inset-0"></div>
            {selectedProgram ? (
              <div className="relative z-10 animate-fadeIn">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3 shadow-glow">
                    {selectedProgram.id === 1 ? (
                      <TrendingUp className="h-5 w-5 text-white" />
                    ) : selectedProgram.id === 2 ? (
                      <Zap className="h-5 w-5 text-white" />
                    ) : selectedProgram.id === 3 ? (
                      <TargetIcon className="h-5 w-5 text-white" />
                    ) : selectedProgram.id === 4 ? (
                      <BookOpen className="h-5 w-5 text-white" />
                    ) : selectedProgram.id === 5 ? (
                      <Users className="h-5 w-5 text-white" />
                    ) : (
                      <MessageSquare className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <h2 className="text-2xl font-bold">{selectedProgram.title}</h2>
                </div>
                <div className="h-1 w-24 bg-amber-400 mt-2 mb-3 rounded-full"></div>
                <p className="text-white text-opacity-90">
                  {selectedProgram.subtitle}
                </p>
                <div className="mt-3 flex items-center text-sm text-white/80">
                  <span className="mr-4">
                    Duration: {selectedProgram.duration}
                  </span>
                  <span>Time: {selectedProgram.sessionTime}</span>
                </div>
              </div>
            ) : (
              <div className="relative z-10">
                <h2 className="text-2xl font-bold">Register for a Program</h2>
                <div className="h-1 w-16 bg-amber-400 mt-2 rounded-full"></div>
                <p className="text-white text-opacity-90 mt-2">
                  Select a program to register for our training sessions
                </p>
              </div>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-amber-200 transition-colors duration-300"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4 bg-gradient-to-b from-white to-blue-50 overflow-y-auto"
          style={{ maxHeight: "calc(90vh - 180px)" }}
        >
          {selectedProgram && (
            <div className="mb-4 p-4 bg-blue-50 border border-blue-100 rounded-sm animate-fadeIn">
              <p className="text-sm text-blue-800">
                You are registering for{" "}
                <span className="font-semibold">
                  {selectedProgram.title}
                </span>
              </p>
            </div>
          )}

          {/* Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-300 shadow-sm"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-300 shadow-sm"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-300 shadow-sm"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Program Dropdown */}
          <div className="space-y-2">
            <label
              htmlFor="program"
              className="block text-sm font-medium text-gray-700"
            >
              Program Interest
            </label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-300 shadow-sm appearance-none bg-white"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%23666%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M6 9l6 6 6-6%22 /></svg>')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                paddingRight: "2.5rem",
              }}
            >
              <option value="">Select a Program</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id.toString()}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="2"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-300 shadow-sm"
              placeholder="Tell us about your goals or any questions you have..."
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-sm transition-all duration-200 hover:shadow-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:translate-y-[-1px] flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationModal;
