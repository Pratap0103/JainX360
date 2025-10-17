import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";
import { courses } from "../data/courses";

export default function RegistrationModal({ isOpen, onClose, program }) {
  const modalRef = useRef(null);
  const scrollYRef = useRef(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: program ? program.id.toString() : "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  // Update form data when program changes
  useEffect(() => {
    if (program) {
      setFormData((prev) => ({
        ...prev,
        program: program.id.toString(),
      }));
    }
  }, [program]);

  // Close modal when clicking outside and freeze background
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Freeze background exactly where it is (prevents any vertical jump)
      scrollYRef.current = window.scrollY || window.pageYOffset || 0;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      // Restore background scroll
      const y = Math.abs(parseInt(document.body.style.top || "0", 10)) || 0;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      if (y) window.scrollTo(0, y);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      const y = Math.abs(parseInt(document.body.style.top || "0", 10)) || 0;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      if (y) window.scrollTo(0, y);
    };
  }, [isOpen, onClose]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission with GAS integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    console.log("=== Form Submission Started ===");
    console.log("Form data:", formData);
    console.log("Program:", program);
    console.log("Program title:", program?.title);
    console.log(
      "Program object keys:",
      program ? Object.keys(program) : "No program"
    );

    try {
      const selectedCourse = courses.find(
        (c) => c.id.toString() === (formData.program || "")
      );
      const programTitle = program?.title || selectedCourse?.title || "";
      const params = new URLSearchParams({
        action: "submitRegistration",
        sheetName: "Program",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        program: programTitle,
        message: formData.message,
      });

      console.log("Selected program title:", programTitle);
      console.log("URL params:", params.toString());
      console.log(
        "Fetching URL:",
        "https://script.google.com/macros/s/AKfycbyLgYJlvw2uk6Hn5SspDi5y5DHvxlEFJg0LUsBST5JkzRIBthej8T52CE0sxGksNoTZxg/exec"
      );

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyLgYJlvw2uk6Hn5SspDi5y5DHvxlEFJg0LUsBST5JkzRIBthej8T52CE0sxGksNoTZxg/exec",
        {
          method: "POST",
          body: params,
        }
      );

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      console.log(
        "Response headers:",
        Object.fromEntries(response.headers.entries())
      );

      const responseText = await response.text();
      console.log("Raw response text:", responseText);

      let result;
      try {
        result = JSON.parse(responseText);
        console.log("Parsed result:", result);
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        console.log("Response was not valid JSON");
        throw new Error("Invalid response format: " + responseText);
      }

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Registration submitted successfully!",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          program: program ? program.id.toString() : "",
          message: "",
        });

        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit registration. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="flex fixed inset-0 z-50 justify-center items-center p-4 backdrop-blur-sm bg-black/60">
      <div
        ref={modalRef}
        className="relative w-full max-w-[760px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Fixed Header */}
        <div className="flex-shrink-0 px-6 pt-6 pb-4 border-b border-gray-200 md:px-8 md:pt-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-gray-500 rounded-full transition-colors hover:text-gray-700 hover:bg-gray-100"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Register now
          </h2>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            Fill out this form, and we'll get you enrolled for the selected program.
          </p>
          {program && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs md:text-sm">
              <span className="font-medium">Program:</span> {program.title}
            </div>
          )}
        </div>

        {/* Scrollable Form Content */}
        <div className="overflow-y-auto flex-1 px-6 py-4 md:px-8">
          <form onSubmit={handleSubmit} id="registration-form">
            <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm md:p-6">
              <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-2.5 md:py-3 mt-2 w-full text-sm md:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Your name"
                  />
                </div>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-2.5 md:py-3 mt-2 w-full text-sm md:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="abc@email.com"
                  />
                </div>
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-4 py-2.5 md:py-3 mt-2 w-full text-sm md:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Your Phone number"
                  />
                </div>
                {/* Program */}
                <div>
                  <label
                    htmlFor="program"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Program interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="px-4 py-2.5 md:py-3 mt-2 w-full text-sm md:text-base rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a Program</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id.toString()}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Message */}
              <div className="mt-4 md:mt-6">
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
                  rows="4"
                  className="px-4 py-2.5 md:py-3 mt-2 w-full text-sm md:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Share relevant background information"
                ></textarea>
              </div>
            </div>
            {/* Status Message */}
            {submitStatus.message && (
              <div
                className={`mt-4 p-3 md:p-4 rounded-lg text-xs md:text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>

        {/* Fixed Footer with Submit Button */}
        <div className="flex-shrink-0 px-6 py-4 bg-gray-50 border-t border-gray-200 md:px-8 md:py-6">
          <button
            type="submit"
            form="registration-form"
            disabled={isSubmitting}
            className="px-6 py-2.5 md:py-3 w-full text-sm md:text-base font-medium text-white bg-blue-600 rounded-md shadow-lg transition-colors hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting…" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}