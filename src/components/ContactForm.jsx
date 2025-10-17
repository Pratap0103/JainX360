import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    try {
      console.log('=== Contact form submission started ===');
      console.log('Contact form data:', formData);
      // Build row for Contact sheet:
      // A: Timestamp (DD/MM/YYYY hh:mm:ss)
      // B: Your Name, C: Email, D: Phone Number, E: Program Interest (from Subject), F: Add info (Message)
      const pad = (n) => String(n).padStart(2, '0');
      const d = new Date();
      const timestamp = `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
      const rowData = [
        timestamp,
        formData.name,
        formData.email,
        formData.phone,
        formData.subject,
        formData.message
      ];
      console.log('Contact rowData built:', rowData);
      const params = new URLSearchParams({
        action: 'insert',
        sheetName: 'Contact',
        rowData: JSON.stringify(rowData)
      });
      console.log('Contact URL params:', params.toString());
      const gasUrl = 'https://script.google.com/macros/s/AKfycbyLgYJlvw2uk6Hn5SspDi5y5DHvxlEFJg0LUsBST5JkzRIBthej8T52CE0sxGksNoTZxg/exec';
      console.log('Fetching GAS URL:', gasUrl);
      
      const response = await fetch(gasUrl, {
        method: 'POST',
        body: params
      });
      console.log('GAS response status:', response.status);
      console.log('GAS response ok:', response.ok);
      console.log('GAS response headers:', Object.fromEntries(response.headers.entries()))
      
      const text = await response.text();
      console.log('GAS raw response text:', text);
      let result;
      try {
        result = JSON.parse(text);
        console.log('GAS parsed result:', result);
      } catch (err) {
        throw new Error('Invalid response: ' + text);
      }
      
      if (!response.ok || !result.success) {
        throw new Error(result?.error || 'Submission failed');
      }
      
      console.log('Contact submission succeeded.');
      setFormStatus({ submitting: false, submitted: true, error: false });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 3000);
    } catch (error) {
      console.error('Contact submission error:', error);
      if (error?.stack) console.error('Stack:', error.stack);
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-md shadow-md p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="abc@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+91 98765 43210"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Training Inquiry"
          />
        </div>
      </div>
      
      <div className="mt-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="I'm interested in learning more about your training programs..."
        ></textarea>
      </div>
      
      <div className="mt-6">
        <button
          type="submit"
          disabled={formStatus.submitting}
          className="btn btn-primary w-full flex justify-center items-center"
        >
          {formStatus.submitting ? (
            <span>Sending...</span>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </div>
      
      {formStatus.submitted && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-sm text-center">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      
      {formStatus.error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-sm text-center">
          Oops! Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}

export default ContactForm;