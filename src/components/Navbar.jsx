import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import RegistrationModal from "./RegistrationModal";
import { withBase } from "../lib/utils";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showRegModal, setShowRegModal] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Debugging showRegModal state changes
  useEffect(() => {
    console.log("showRegModal state changed to:", showRegModal);
  }, [showRegModal]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom NavLink component with animation
  const AnimatedNavLink = ({ to, children }) => {
    const isActive = location.pathname === to;

    return (
      <NavLink
        to={to}
        className={`font-medium relative group ${
          isActive ? "text-blue-600" : "text-gray-700"
        }`}
      >
        <span className="transition-colors duration-300 group-hover:text-blue-600">
          {children}
        </span>
        <span
          className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
            isActive ? "w-full" : ""
          }`}
        ></span>
      </NavLink>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-white shadow-lg" : "py-4 bg-white shadow-md"
      }`}
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center p-0.5 md:p-1 rounded-full hover-lift bg-white overflow-visible">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 gradient-blue group-hover:opacity-20"></div>
              <img
                src={withBase("/images/JainX%20(2).png")}
                alt="JainX logo"
                className="object-contain h-10 md:h-12 w-auto max-w-[170px] md:max-w-[210px] transition-transform duration-300 scale-125 md:scale-150 group-hover:scale-[1.35] md:group-hover:scale-[1.6]"
              />
            </div>
            
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <AnimatedNavLink to="/">Home</AnimatedNavLink>
            <AnimatedNavLink to="/about">About Us</AnimatedNavLink>
            <AnimatedNavLink to="/courses">Course Catalog</AnimatedNavLink>
            <AnimatedNavLink to="/trainer">Certification</AnimatedNavLink>
            <AnimatedNavLink to="/gallery">Gallery</AnimatedNavLink>
            <AnimatedNavLink to="/contact">Contact</AnimatedNavLink>
            <button
              onClick={() => {
                setShowRegModal(true);
                console.log("setShowRegModal(true) called");
              }}
              className="btn btn-primary pulse hover-lift shimmer"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-gray-800 transition-transform duration-300 md:hidden focus:outline-none hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                size={24}
                className="transition-transform duration-300 rotate-90"
              />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "mt-4 opacity-100 max-h-[500px]" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-4 py-6 space-y-4 bg-white rounded-lg shadow-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium py-2 transition-all duration-300 ${
                  isActive
                    ? "text-blue-600 translate-x-2"
                    : "text-gray-700 hover:translate-x-2"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium py-2 transition-all duration-300 ${
                  isActive
                    ? "text-blue-600 translate-x-2"
                    : "text-gray-700 hover:translate-x-2"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `font-medium py-2 transition-all duration-300 ${
                  isActive
                    ? "text-blue-600 translate-x-2"
                    : "text-gray-700 hover:translate-x-2"
                }`
              }
            >
              Course Catalog
            </NavLink>
            <NavLink
              to="/trainer"
              className={({ isActive }) =>
                `font-medium py-2 transition-all duration-300 ${
                  isActive
                    ? "text-blue-600 translate-x-2"
                    : "text-gray-700 hover:translate-x-2"
                }`
              }
            >
              Our Trainer
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `font-medium py-2 transition-all duration-300 ${
                  isActive
                    ? "text-blue-600 translate-x-2"
                    : "text-gray-700 hover:translate-x-2"
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium py-2 transition-all duration-300 ${
                  isActive
                    ? "text-blue-600 translate-x-2"
                    : "text-gray-700 hover:translate-x-2"
                }`
              }
            >
              Contact
            </NavLink>
            <button
              onClick={() => {
                setShowRegModal(true);
                console.log("setShowRegModal(true) called (mobile)");
              }}
              className="text-center btn btn-primary shimmer hover-lift"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={showRegModal}
        onClose={() => setShowRegModal(false)}
      />
    </nav>
  );
}

export default Navbar;
