const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Contact = require('../models/Contact'); // Ensure the path is correct

// Get health tips
router.get('/health-tips', (req, res) => {
  const tips = [
    { id: 1, title: 'Stay Hydrated', content: 'Drink at least 8 glasses of water a day.' },
    { id: 2, title: 'Exercise Regularly', content: 'Aim for 30 minutes of moderate exercise most days.' },
    { id: 3, title: 'Get Enough Sleep', content: 'Adults should aim for 7-9 hours of sleep per night.' },
    { id: 4, title: 'Eat a Balanced Diet', content: 'Include a variety of fruits, vegetables, and whole grains.' },
    { id: 5, title: 'Manage Stress', content: 'Practice stress-reduction techniques like meditation or yoga.' },
  ];
  res.json(tips);
});

// Submit contact form (protected route)
router.post('/contact', auth, async (req, res) => {
  try {
    // Create a new contact form entry
    console.log('Received request:', req.body);
    const { name, email, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the entry to the database
    await newContact.save();
    console.log('Contact form submission saved:', newContact);
    res.json({ msg: 'Message received' });
  } catch (err) {
    console.error('Error saving contact form submission:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get nearby hospitals (mock data)
router.get('/nearby-hospitals', (req, res) => {
  const hospitals = [
    { id: 1, name: 'General Hospital', distance: '2.5 km' },
    { id: 2, name: 'City Medical Center', distance: '3.8 km' },
    { id: 3, name: 'St. Mary\'s Hospital', distance: '5.2 km' },
  ];
  res.json(hospitals);
});

module.exports = router;