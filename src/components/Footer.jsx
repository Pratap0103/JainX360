import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, BookOpen, ChevronRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="overflow-hidden relative text-white bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-blue-600"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl bg-blue-600/10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl bg-amber-500/10"></div>
      
      <div className="container relative z-10 px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="transition-all duration-500 transform hover:-translate-y-1">
            <div className="flex items-center mb-5 space-x-2">
              <BookOpen className="w-7 h-7 text-amber-500" />
              <h3 className="text-2xl font-bold text-white">Mastery Academy</h3>
            </div>
            <p className="mb-6 leading-relaxed text-gray-300">
              Empowering Individuals & Executives, Staffs & Entrepreneurs through Coaching, Consulting & Organizational Turnaround since 2013.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="flex justify-center items-center w-10 h-10 text-gray-400 bg-gray-800 rounded-full transition-all duration-300 transform hover:bg-blue-600 hover:text-white hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" className="flex justify-center items-center w-10 h-10 text-gray-400 bg-gray-800 rounded-full transition-all duration-300 transform hover:bg-pink-600 hover:text-white hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" className="flex justify-center items-center w-10 h-10 text-gray-400 bg-gray-800 rounded-full transition-all duration-300 transform hover:bg-blue-700 hover:text-white hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" className="flex justify-center items-center w-10 h-10 text-gray-400 bg-gray-800 rounded-full transition-all duration-300 transform hover:bg-blue-400 hover:text-white hover:scale-110">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="transition-all duration-500 transform hover:-translate-y-1">
            <h4 className="pb-2 mb-5 text-lg font-semibold border-b border-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">Course Catalog</span>
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">Schedule</span>
                </Link>
              </li>
              <li>
                <Link to="/trainer" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">Our Trainer</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Programs */}
          <div className="transition-all duration-500 transform hover:-translate-y-1">
            <h4 className="pb-2 mb-5 text-lg font-semibold border-b border-gray-800">Our Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">The Game Of Business</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">Energy In Top Gear</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">Moving Ahead Program</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">Business In Top Gear</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">Personal & Business Consultancy</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="flex items-center text-gray-300 transition-colors hover:text-white group">
                  <ChevronRight className="w-0 h-4 text-amber-500 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-2">Energy 360*</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="transition-all duration-500 transform hover:-translate-y-1">
            <h4 className="pb-2 mb-5 text-lg font-semibold border-b border-gray-800">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="p-2 mr-3 bg-gray-800 rounded-full transition-colors duration-300 group-hover:bg-amber-500">
                  <MapPin className="w-5 h-5 text-amber-500 transition-colors duration-300 group-hover:text-white" />
                </div>
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">OFFICE NO. 4, FIRST FLOOR, PREM KUNJ, CIVIL LINE, RAIPUR-492001</span>
              </li>
              <li className="flex items-center group">
                 <div className="p-2 mr-3 bg-gray-800 rounded-full transition-colors duration-300 group-hover:bg-amber-500">
                   <Phone className="w-5 h-5 text-amber-500 transition-colors duration-300 group-hover:text-white" />
                 </div>
                 <a href="https://wa.me/919098562225" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition-colors duration-300 group-hover:text-white">+91-9981327777</a>
               </li>
               <li className="flex items-center group">
                 <div className="p-2 mr-3 bg-gray-800 rounded-full transition-colors duration-300 group-hover:bg-amber-500">
                   <Mail className="w-5 h-5 text-amber-500 transition-colors duration-300 group-hover:text-white" />
                 </div>
                 <a href="mailto:sourabhpune@gmail.com" className="text-gray-300 transition-colors duration-300 group-hover:text-white">INFO@JAINX.IN</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="flex flex-col justify-between items-center md:flex-row">
            <p className="mb-4 text-sm text-gray-400 md:mb-0">
              © {new Date().getFullYear()} Mastery Academy. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;