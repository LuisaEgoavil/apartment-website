import './Contact.scss';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className='contact-text-container'>
      <Helmet>
          <title>Contact</title>
      </Helmet>
      <Fade>
      {/* TODO: change the number */}
        <p>
          <a 
            href="https://wa.me/+4917653832422" 
            target="_blank"
            rel="noreferrer"
            className='whatsapp-logo'
            >{t('contact.whatsapp_number')}</a> 
        </p>
        <p>
          <a href="tel:+4917653832422" target="_blank" rel="noreferrer">{t('contact.phone_number')}</a>
        </p>
      </Fade>
    </div>
  )
}

export default Contact