import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">BMI Calculator</h1>
      <form onSubmit={calculateBMI} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="height" className="block mb-2">Height (cm)</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="weight" className="block mb-2">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Calculate BMI
        </button>
      </form>
      {bmi && (
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold">Your BMI: {bmi}</h2>
          <p className="mt-2">
            {bmi < 18.5 ? 'Underweight' :
             bmi < 25 ? 'Normal weight' :
             bmi < 30 ? 'Overweight' : 'Obese'}
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;