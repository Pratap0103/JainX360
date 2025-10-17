import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <HeroSection 
        title="Contact Us"
        subtitle="Get in touch with us for inquiries, bookings or custom program requests"
        backgroundImage="/contactpage.jpg"
        ctaLink="/courses"
      />
      
      {/* Contact Information */}
      <section className="container-custom">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-gray-900">Get In Touch</h2>
            
            <div className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <div className="flex justify-center items-center mr-3 sm:mr-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-full border border-blue-100">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg sm:text-xl font-bold">Office Location</h3>
                  <p className="text-sm sm:text-base text-gray-700">OFFICE NO. 4, FIRST FLOOR, PREM KUNJ, CIVIL LINE, RAIPUR-492001</p>
                  <p className="text-sm sm:text-base text-gray-700"> RAIPUR-492001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex justify-center items-center mr-3 sm:mr-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-full border border-blue-100">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg sm:text-xl font-bold">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    <a href="https://wa.me/9981327777" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-600">
                      +91-9981327777
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex justify-center items-center mr-3 sm:mr-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-full border border-blue-100">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg sm:text-xl font-bold">Email</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    <a href="mailto:INFO@JAINX.IN" className="transition-colors hover:text-blue-600">
                    INFO@JAINX.IN
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex justify-center items-center mr-3 sm:mr-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-full border border-blue-100">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg sm:text-xl font-bold">Office Hours</h3>
                  <p className="text-sm sm:text-base text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm sm:text-base text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-sm sm:text-base text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Connect With Us</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a 
                  href="https://facebook.com" 
                  className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 text-blue-600 bg-blue-100 rounded-full transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                  </svg>
                </a>
                
                <a 
                  href="https://instagram.com" 
                  className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 text-pink-600 bg-pink-100 rounded-full transition-all duration-300 hover:bg-pink-600 hover:text-white hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" />
                  </svg>
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 text-blue-700 bg-blue-100 rounded-full transition-all duration-300 hover:bg-blue-700 hover:text-white hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
                  </svg>
                </a>
                
                <a 
                  href="https://youtube.com" 
                  className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 text-red-600 bg-red-100 rounded-full transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.244 4c.534.005 1.68.017 2.879.058l.653.025c1.222.058 2.444.14 3.116.262c.898.163 1.598.9 1.776 1.82a41.27 41.27 0 0 1 .332 4.79l.005.544c.004.514.006.98.006 1.4c0 .473-.002.992-.006 1.563l-.006.581c-.023 1.887-.084 3.562-.33 4.79c-.18.92-.878 1.657-1.776 1.82c-.672.122-1.894.204-3.116.263l-.653.024c-1.2.041-2.346.053-2.88.058l-.337.004c-.338.004-.712.006-1.12.006l-.67-.003c-.61-.003-1.287-.01-1.987-.021l-.665-.017l-.665-.02c-1.12-.035-2.24-.088-3.116-.231c-.897-.163-1.597-.9-1.776-1.82c-.245-1.227-.306-2.9-.33-4.782l-.005-.59a120.442 120.442 0 0 1-.006-1.554c0-.422.002-.89.006-1.403l.004-.517a41.19 41.19 0 0 1 .331-4.788c.18-.92.88-1.657 1.776-1.82c.877-.143 1.997-.196 3.117-.231l.664-.02l.665-.017c.7-.012 1.377-.018 1.988-.022l.67-.002c.407 0 .782.002 1.119.006l.337.004ZM10 8.5v7l6-3.5l-6-3.5Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-gray-900">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-12 sm:py-16">
        <div className="container px-4 mx-auto">
          <div className="overflow-hidden h-64 sm:h-80 bg-gray-200 rounded-lg">
            <iframe
              title="JainX Office Location"
              src="https://maps.google.com/maps?q=OFFICE%20NO.%204%2C%20FIRST%20FLOOR%2C%20PREM%20KUNJ%2C%20CIVIL%20LINE%2C%20RAIPUR-492001&z=15&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <div className="mx-auto space-y-4 sm:space-y-6 max-w-3xl">
            <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">How do I book a training program?</h3>
              <p className="text-sm sm:text-base text-gray-700">
                You can book a training program by filling out the contact form above, calling us directly, or sending an email. Our team will get back to you within 24 hours to discuss your specific requirements.
              </p>
            </div>
            
            <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">Do you offer customized training programs?</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Yes, we specialize in creating customized training programs tailored to your organization's specific needs and challenges. Contact us to discuss your requirements, and we'll design a program just for you.
              </p>
            </div>
            
            <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">What is your cancellation policy?</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our standard cancellation policy allows for full refunds if cancelled at least 7 days before the scheduled program. Cancellations within 7 days are subject to a 50% fee. Please contact us for more details.
              </p>
            </div>
            
            <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">How many participants can attend a program?</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our standard programs can accommodate between 15-30 participants for optimal interaction and learning. For larger groups, we can design special formats or conduct multiple sessions. Corporate programs can be customized based on your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;