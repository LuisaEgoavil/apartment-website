import './Contact.scss';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className='contact-text-container'>
      <Helmet>
          <title>Contact</title>
      </Helmet>
      <Fade>
      {/* TODO: change the number */}
       <div>
          <BsWhatsapp />
          <a 
            href="https://wa.me/+51952060910" 
            target="_blank"
            rel="noreferrer"
            className='whatsapp-logo'
          >{t('contact.whatsapp_number')}</a> 
        </div>
        <div>
          <BsTelephone />
          <a href="tel:+51952060910" target="_blank" rel="noreferrer">{t('contact.phone_number')}</a>
        </div>
      </Fade>
    </div>
  )
}

export default Contact