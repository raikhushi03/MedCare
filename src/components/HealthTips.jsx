import React from 'react';

const tips = [
  {
    id: 1,
    title: 'Stay Hydrated',
    content: 'Drink at least 8 glasses of water a day to keep your body hydrated and functioning properly.',
  },
  {
    id: 2,
    title: 'Exercise Regularly',
    content: 'Aim for at least 30 minutes of moderate exercise most days of the week to improve overall health.',
  },
  {
    id: 3,
    title: 'Get Enough Sleep',
    content: 'Adults should aim for 7-9 hours of sleep per night to support physical and mental health.',
  },
  {
    id: 4,
    title: 'Eat a Balanced Diet',
    content: 'Include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in your diet.',
  },
  {
    id: 5,
    title: 'Manage Stress',
    content: 'Practice stress-reduction techniques like meditation, deep breathing, or yoga to improve mental health.',
  },
];

const HealthTips = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Health Tips</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip) => (
          <div key={tip.id} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
            <p className="text-gray-600">{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTips;