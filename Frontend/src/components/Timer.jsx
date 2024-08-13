import { useState, useEffect } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  return (
    <div className="App">
      <progress value={seconds} max={60}>
        {String(seconds).padStart(2, "0")}
      </progress>
    </div>
  );
};
