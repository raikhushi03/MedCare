import React, { useState } from 'react';

const NearbyHospitals = () => {
  const [location, setLocation] = useState('');
  const [hospitals, setHospitals] = useState([]);

  const searchHospitals = (e) => {
    e.preventDefault();
    // In a real application, you would make an API call to a backend service
    // that would return nearby hospitals based on the location.
    // For this example, we'll use dummy data.
    setHospitals([
      { id: 1, name: 'General Hospital', distance: '2.5 km' },
      { id: 2, name: 'City Medical Center', distance: '3.8 km' },
      { id: 3, name: 'St. Mary\'s Hospital', distance: '5.2 km' },
    ]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Nearby Hospitals</h1>
      <form onSubmit={searchHospitals} className="max-w-md mx-auto mb-8">
        <div className="flex">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            className="flex-grow px-3 py-2 border rounded-l"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
            Search
          </button>
        </div>
      </form>
      {hospitals.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Nearby Hospitals</h2>
          <ul>
            {hospitals.map((hospital) => (
              <li key={hospital.id} className="bg-white shadow rounded-lg p-4 mb-4">
                <h3 className="text-xl font-semibold">{hospital.name}</h3>
                <p className="text-gray-600">Distance: {hospital.distance}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NearbyHospitals;