import React from "react";
import i18next from "i18next";

const languages = [
  {
    code: 'en',
    name: 'EN'
  },
  {
    code: 'de',
    name: 'DE'
  },
  {
    code: 'es',
    name: 'ES'
  }
]
function Button() {
  return (
    <header>
      <div className='lng-button'>
        {languages.map(({ code, name }) => (
          <button 
            key={code} 
            onClick={() => i18next.changeLanguage(code)} 
            type="submit"
            style={{ fontWeight: i18next.resolvedLanguage === code ? 'bold' : 'normal' }}>
              {name}
            </button>
        ))}
      </div>
    </header>
  )
}

export default Button;