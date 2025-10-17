import React from 'react';
import { Quote } from 'lucide-react';

function TestimonialCard({ name, role, company, text }) {
  return (
    <div className="bg-white rounded-md shadow-lg p-6 md:p-8 relative">
      <Quote className="h-8 w-8 text-blue-100 absolute top-4 right-4" />
      <p className="text-gray-700 mb-6 italic">{text}</p>
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-sm bg-blue-100 flex items-center justify-center mr-4">
          <span className="text-blue-600 font-bold text-lg">{name.charAt(0)}</span>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900">{name}</h5>
          <p className="text-gray-500 text-sm">{role}{company && `, ${company}`}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;