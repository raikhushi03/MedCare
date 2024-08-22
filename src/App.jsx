import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import BMICalculator from './components/BMICalculator';
import NearbyHospitals from './components/NearbyHospitals';
import HealthTips from './components/HealthTips';
import ContactForm from './components/ContactForm';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/bmi-calculator" element={<BMICalculator />} />
            <Route path="/nearby-hospitals" element={<NearbyHospitals />} />
            <Route path="/health-tips" element={<HealthTips />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
