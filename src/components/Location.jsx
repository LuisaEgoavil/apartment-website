import './Location.scss';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

function Location () {
  const { t } = useTranslation();

  return (
    <div>
      <Fade>
        <div className='location-text-container'>
          <h2>{t('location.title')}</h2>
          <p>{t('location.description')}</p>
        </div>
        <div className='google-map'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.7250303201497!2d-77.05847735464747!3d-12.081311299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c901f54fb49b%3A0xe8cf33518712d08d!2sAv.%20San%20Felipe%20150%2C%20Jes%C3%BAs%20Mar%C3%ADa%2015072%2C%20Peru!5e0!3m2!1sde!2sde!4v1676570104376!5m2!1sde!2sde"
            style={{order:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </Fade>
    </div>
  )
}

export default Location