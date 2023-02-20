import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";

function NotFound() {
  const [counter, setCounter] = useState(5);

  // Set countdown
  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  
  return (
    <Fade>
      <Helmet>
          <title>Ooops...</title>
      </Helmet>
      <p>Sorry, this page doesn't exist, it will redirect in {counter} seconds...</p>
    </Fade>
  )
}

export default NotFound