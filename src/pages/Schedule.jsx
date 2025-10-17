import React from 'react';
import HeroSection from '../components/HeroSection';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Upcoming schedules data
const schedules = [
  {
    id: 1,
    program: "The Game Of Business",
    date: "June 15-17, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Devendra Nagar, Raipur",
    availableSeats: 15,
    color: "blue",
    category: "business"
  },
  {
    id: 2,
    program: "Energy In Top Gear",
    date: "July 8-10, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Devendra Nagar, Raipur",
    availableSeats: 20,
    color: "amber",
    category: "personal"
  },
  {
    id: 3,
    program: "Moving Ahead Program",
    date: "July 20-22, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Devendra Nagar, Raipur",
    availableSeats: 12,
    color: "emerald",
    category: "personal"
  },
  {
    id: 4,
    program: "Business In Top Gear",
    date: "August 5-7, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Hotel Babylon International, Raipur",
    availableSeats: 25,
    color: "purple",
    category: "business"
  },
  {
    id: 5,
    program: "Stage Conquering",
    date: "August 19-20, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Devendra Nagar, Raipur",
    availableSeats: 18,
    color: "rose",
    category: "personal"
  },
  {
    id: 6,
    program: "The Game Of Business",
    date: "September 10-12, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Hotel Babylon International, Raipur",
    availableSeats: 15,
    color: "blue",
    category: "business"
  }
];

function Schedule() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <HeroSection 
        title="Training Schedule"
        subtitle="Find upcoming training programs and secure your spot"
        backgroundImage="https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Calendar Section */}
      <section className="container-custom">
        <h2 className="section-heading">Upcoming Programs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schedules.map((event) => (
            <div 
              key={event.id} 
              className={`bg-white rounded-md shadow-md overflow-hidden border-t-4 border-${event.color}-500 transition-transform hover:translate-y-[-5px]`}
            >
              <div className="p-6">
                <span className={`inline-block px-3 py-1 text-sm font-medium text-${event.color}-700 bg-${event.color}-100 rounded-sm mb-4`}>
                  {event.category === "business" ? "Business Program" : "Personal Development"}
                </span>
                <h3 className="text-xl font-bold mb-4">{event.program}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <Calendar className={`h-5 w-5 text-${event.color}-500 mr-3 mt-0.5`} />
                    <div>
                      <span className="font-medium">Date:</span>
                      <p className="text-gray-700">{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className={`h-5 w-5 text-${event.color}-500 mr-3 mt-0.5`} />
                    <div>
                      <span className="font-medium">Time:</span>
                      <p className="text-gray-700">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className={`h-5 w-5 text-${event.color}-500 mr-3 mt-0.5`} />
                    <div>
                      <span className="font-medium">Location:</span>
                      <p className="text-gray-700">{event.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className={`h-5 w-5 text-${event.color}-500 mr-3 mt-0.5`} />
                    <div>
                      <span className="font-medium">Available Seats:</span>
                      <p className="text-gray-700">{event.availableSeats}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a href="#register" className="btn btn-primary flex-1 text-center">Register</a>
                  <Link to={`/courses#${event.program.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-outline flex-1 text-center">Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Registration */}
      <section className="bg-gray-50 py-16 md:py-24" id="register">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Register for a Program</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-md shadow-md p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="program" className="block text-gray-700 font-medium mb-2">Select Program</label>
                  <select 
                    id="program" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Choose a program</option>
                    {schedules.map(schedule => (
                      <option key={schedule.id} value={schedule.id}>{schedule.program} - {schedule.date}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="participants" className="block text-gray-700 font-medium mb-2">Number of Participants</label>
                <input 
                  type="number" 
                  id="participants" 
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="special" className="block text-gray-700 font-medium mb-2">Special Requirements (Optional)</label>
                <textarea 
                  id="special" 
                  rows="3" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any dietary restrictions, accessibility needs, or special arrangements..."
                ></textarea>
              </div>
              
              <div>
                <button type="submit" className="btn btn-primary w-full rounded-sm">Submit Registration</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="container-custom">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">What is the registration process?</h3>
            <p className="text-gray-700">
              You can register for any program by filling out the registration form above. Once submitted, our team will contact you within 24 hours to confirm your registration and provide payment instructions.
            </p>
          </div>
          
          <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">What is the payment policy?</h3>
            <p className="text-gray-700">
              A 50% advance payment is required to confirm your spot in any program. The remaining amount can be paid on the first day of the program. We accept bank transfers, UPI payments, and cash.
            </p>
          </div>
          
          <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">What is the cancellation policy?</h3>
            <p className="text-gray-700">
              Cancellations made more than 7 days before the program start date will receive a full refund minus a 10% processing fee. Cancellations within 7 days will receive a 50% refund. No refunds for cancellations less than 48 hours before the program.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Do you offer group discounts?</h3>
            <p className="text-gray-700">
              Yes, we offer discounts for groups of 3 or more participants registering together for the same program. Please contact us directly for group registration and discount information.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Can you conduct programs at our location?</h3>
            <p className="text-gray-700">
              Yes, we offer customized in-house training programs for organizations. Please contact us with your requirements and we'll design a program specifically for your team.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-blue-600 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Customized Schedule?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            If the current schedule doesn't work for you or your organization, we can arrange custom dates.
          </p>
          <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Schedule;