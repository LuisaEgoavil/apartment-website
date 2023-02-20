import IMAGES from '../images';
import './Gallery.scss';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-bootstrap/Carousel';
import {Helmet} from "react-helmet";

function Gallery () {

  return (
    <Fade>
      <Helmet>
          <title>Gallery</title>
      </Helmet>
      <div>
        <h3>Gallery</h3>
        <Carousel fade variant="dark" interval={null}>
          {IMAGES && IMAGES.map(item => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.image}
                alt=""
              />
              {/* TODO: check here is this is still needed after putting the text */}
              {/* <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Fade>
  )
}

export default Gallery
