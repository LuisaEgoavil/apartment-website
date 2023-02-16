import './Contact.scss';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      {/* TODO: change the number */}
      <a href="https://wa.me/+4917653832422" target="_blank"className='whatsapp-logo'>{t('contact.whatsapp_number')}</a> 
      <a href="tel:+4917653832422">{t('contact.phone_number')}</a>
    </div>
  )
}

export default Contact