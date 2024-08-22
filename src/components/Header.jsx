import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../global/UserContext';
import websiteLogo from '../assets/images/website_logo.png';
import defaultAvatar from '../assets/images/default_avatar.png'; // Placeholder avatar image

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src={websiteLogo} alt="website_logo" className="w-20 h-20 object-contain cursor-pointer" />
        </Link>
        <div className="flex space-x-4 items-center">
          <Link to="/bmi-calculator" className="text-gray-700 hover:text-primary">BMI Calculator</Link>
          <Link to="/nearby-hospitals" className="text-gray-700 hover:text-primary">Nearby Hospitals</Link>
          <Link to="/health-tips" className="text-gray-700 hover:text-primary">Health Tips</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
          {user ? (
            <>
              <img src={defaultAvatar} alt="user avatar" className="w-10 h-10 rounded-full object-cover" />
              <button onClick={handleLogout} className="text-gray-700 hover:text-primary">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-primary">Login</Link>
              <Link to="/signup" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
