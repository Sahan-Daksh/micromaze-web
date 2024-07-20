import { useState, useEffect } from "react";
import "../styles/components/Countdown.css";

const Countdown = () => {
  const targetDate = new Date("2024-12-31T23:59:59").getTime(); // Change this to your target date
  const [timeRemaining, setTimeRemaining] = useState(targetDate - Date.now());

  useEffect(() => {
    const updateCountdown = () => {
      setTimeRemaining(targetDate - Date.now());
    };

    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  const getTime = () => {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTime();

  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-full flex flex-col items-center justify-center relative"
        style={{ backgroundImage: "url('./counter/counter.png')" }}
      >
        <div className="countdown-overlay"></div>
        <div className="countdown-content flex flex-col items-center">
          <div className="flex space-x-6 text-center">
            <div className="flex flex-col items-center">
              <p className="text-5xl text-white">Days</p>
              <p className="text-8xl font-bold text-white">
                {String(days).padStart(2, "0")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-5xl text-white">Hours</p>
              <p className="text-8xl font-bold text-white">
                {String(hours).padStart(2, "0")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-5xl text-white">Minutes</p>
              <p className="text-8xl font-bold text-white">
                {String(minutes).padStart(2, "0")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-5xl text-white">Seconds</p>
              <p className="text-8xl font-bold text-white">
                {String(seconds).padStart(2, "0")}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-9xl text-white font-bold">GRAND FINALE</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
