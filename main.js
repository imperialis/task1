require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const IP_GEOLOCATION_API_KEY = process.env.IP_GEOLOCATION_API_KEY;


const fetchLocationAndWeather = async () => {
  try {
    // Fetch user's location using IPGeolocation API
    const locationResponse = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${IP_GEOLOCATION_API_KEY}`);
    const locationData = await locationResponse.data;
    const city = locationData.city;
    const ip_address = locationData.ip;

    // Fetch weather using WeatherAPI
    const weatherResponse = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`);
    const weatherData = weatherResponse.data;
    const temperature = weatherData.current.temp_c;
    return {
        city,
        temperature,
        ip_address
      };

  } catch (error) {
    console.error('Error fetching location and weather data:', error);
    throw error;
  }
};



app.get('/api/hello', async (req, res) => {
    const visitorName = req.query.visitor_name;

  
    try {
      const { city, temperature, ip_address } = await fetchLocationAndWeather();
  
      const greeting = `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${city}`;
  
      res.json({
        client_ip: ip_address,
        location: city,
        greeting: greeting
      });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching location and weather data' });
    }
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
