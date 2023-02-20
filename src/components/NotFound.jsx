import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";

function NotFound() {

  return (
    <>
      <Fade>
      <Helmet>
          <title>Ooops...</title>
      </Helmet>
        {/* TODO: add seconds for timeout */}
        <p>oops this page doesn't exist</p>
        {/* <h1>Redirecting in 5 seconds...</h1> */}
        <p>Go to the homepage <a href="/">home</a></p>
      </Fade>
    </>
  )
}

export default NotFound