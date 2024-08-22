import React, { useState } from 'react';
import axios from 'axios';
import { BounceLoader } from 'react-spinners'; // Import spinner component

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // Here you would typically send the form data to your backend
    try {
      const response = await axios.post('http://localhost:5001/api/contact', formData, {
        headers: {
          'x-auth-token': localStorage.getItem('token'), // Include token if needed
        },
      });

      console.log('Form submission successful:', response.data);
      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err.response ? err.response.data : err.message);
      setError(err.response ? err.response.data.msg || 'Something went wrong' : 'Something went wrong');
    } finally {
      setLoading(false);
    }
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
        <p className="text-xl">Your message has been received. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
      {loading && (
        <div className="spinner">
          <BounceLoader color="#3498db" loading={loading} size={60} />
        </div>
      )}
      {submitted && <p>Message received!</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ContactForm;