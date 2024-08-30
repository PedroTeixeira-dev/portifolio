import Header from '../header'
import { HomeS } from './styled'

import pt from '../../assets/images/home/PT.png'
import profile from '../../assets/images/home/profile.png'
import fundo from '../../assets/images/home/fundo.png'

import cv from '../../assets/cv/cv.pdf'

export const Home = () => {
  return (
    <HomeS>
      <img className="backgound" src={fundo} />
      <div className="container">
        <Header color="primary" active={1} />
        <section>
          <div>
            <img src={pt} alt="Pedro Teixeira" />
            <p>
              Olá! Eu sou um desenvolvedor front end e estou aqui para
              transformar ideias inovadoras em soluções digitais eficientes.
            </p>
            <a href={cv} download={cv} className="donwload-button">
              DOWLOAD CV
            </a>
          </div>
          <div className="profileContainer">
            <img className="profilePicture" src={profile} alt="Foto do Pedro" />
          </div>
        </section>
      </div>
    </HomeS>
  )
}
