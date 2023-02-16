import IMAGES from '../images.js';
import './Gallery.scss';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

function Gallery () {
  const { t } = useTranslation();

  return (
    <div>
      <Fade>
        <div className='gallery-text-container'>
          <h2>{t('gallery.title')}</h2>
          {/* <p>{t('gallery.description')}</p> */}
        </div>
        <div>
          {
            IMAGES && IMAGES.map((item) =>
              <div key={item.id}>
                <p>{item.description}</p>
                <img src={item.image} className="dpt-img" alt=""/>
              </div>
            )
          }
        </div>
      </Fade>
    </div>
  )
}

export default Gallery
