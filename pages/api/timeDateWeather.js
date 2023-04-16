const axios = require("axios");

const getTimeDateWeather = async (req, res) => {
  try {
    const { data: { time, date, weather } } = await axios.get(
      "http://example.com/time-date-weather"
    );

    const response = {
      time,
      date,
      weather,
      background: "linear-gradient(to right, #00F260, #0575E6)",
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

module.exports = getTimeDateWeather;