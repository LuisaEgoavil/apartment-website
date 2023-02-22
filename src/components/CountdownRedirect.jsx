import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';


const CountdownRedirect = ({ seconds, path }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return timeLeft === 0 ? <Navigate to={path} /> : <div>Sorry, this page doesn't exist, it will redirect in {timeLeft} seconds...</div>
};

export default CountdownRedirect