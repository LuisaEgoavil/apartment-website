import CountdownRedirect from "./CountdownRedirect";
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";

function NotFound(){
  return (
    <Fade>
      <Helmet>
          <title>Ooops...</title>
      </Helmet>
      <CountdownRedirect seconds={10} path="/" />
    </Fade>
  )
}

export default NotFound