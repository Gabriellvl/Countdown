import React, { useState, useEffect } from "react";
import "./App.css";
import pamde_anakin from "./padme_anakin.jpg"; // Replace with your Star Wars image

const next_date = new Date("2024-12-02T16:00:00");

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = next_date - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer); // Clean up timer
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <h1 className="countdown-title">Countdown to Next Event</h1>
          <div className="countdown-timer">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
          <img src={pamde_anakin} className="background-image" alt="Star Wars"/>
          <p>Hey amo</p>
        </header>
      </div>
  );
}

export default App;

