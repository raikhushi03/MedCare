import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-image.jpg';  // Placeholder image

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="relative bg-blue-500 text-white py-24 text-center" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Welcome to MedCare</h1>
          <p className="text-xl mb-8">Your gateway to a healthier life</p>
          <Link to="/signup" className="bg-white text-primary px-6 py-3 rounded font-bold hover:bg-gray-200">Get Started</Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Health Tips</h3>
              <p className="text-gray-600">Get the best advice on maintaining both mental and physical health.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Accurate BMI Calculator</h3>
              <p className="text-gray-600">Calculate your BMI and receive tailored health recommendations.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Find Nearby Hospitals</h3>
              <p className="text-gray-600">Locate the nearest hospitals with our easy-to-use tool.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
