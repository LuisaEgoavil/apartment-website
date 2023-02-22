import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import { useTranslation } from 'react-i18next';

function Home() {
  
  const { t } = useTranslation();
  const spaces = [
    'home.spaces.list_one', 
    'home.spaces.list_two',
    'home.spaces.list_three',
    'home.spaces.list_four',
    'home.spaces.list_five'
  ]

  return(
    <Fade>
      <Helmet>
          <title>Home</title>
      </Helmet>
      <div>
        <p>Hola a todos, me gustaría ofrecer 3 habitaciones que tengo disponibles en un departamento en un 4to piso de un edificio moderno, se rentan amuebadas por noche, semana o semestre.</p>
        <p>Cada haitación tiene lo necesario para una estancia cómoda.</p>
        <p>El edificio tiene una hermosa terraa donde se puede tomar sol y/o hacer una parrillada/asado</p>
        <p>El departamento consta de:</p>
        {spaces.map((space, index) => (
          <ul key={index}>
            <li>{t(space)}</li>
          </ul>
        ))}
        <p>El departamento está muy bien ubicado en la Av. San Felipe, Jesús María. a 10 min caminando de:</p>
        <ul>
          <li>de la Av. Salaverry y San Isidro</li>
          <li>UPC</li>
          <li>Universidad del Pacífico</li>
          <li>ISIL</li>
          <li>Residencial San Felipe</li>
          <li>Supermercados: METRO</li>
          <li>Centro comercial: Real Plaza</li>
        </ul>
        <p>El edificio cuenta con portería 24/7</p>
      </div>
    </Fade>
  )
}

export default Home