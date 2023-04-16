import React from 'react';
import moment from 'moment';

const Landing = () => {
  const currentTime = moment().format("h:mm a");
  const currentDate = moment().format("dddd, MMMM Do YYYY");
  const currentWeather = "Sunny and 75°F";

  return (
    <div
      style={{
        background: "linear-gradient(to right, #40E0D0, #FF8C00)",
        padding: 20,
        textAlign: "center"
      }}
    >
      <h1>{currentTime}</h1>
      <h2>{currentDate}</h2>
      <h3>{currentWeather}</h3>
    </div>
  );
};

export default Landing;