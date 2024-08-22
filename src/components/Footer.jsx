import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 EMI Health. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
        </div>
        <div className="mt-4">
          <a href="https://facebook.com" className="mx-2 hover:underline">Facebook</a>
          <a href="https://twitter.com" className="mx-2 hover:underline">Twitter</a>
          <a href="https://instagram.com" className="mx-2 hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
