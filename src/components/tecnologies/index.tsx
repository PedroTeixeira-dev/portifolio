import Header from '../header'

import { SectionS, SectionTec } from './styled'

import icons from '../../assets/images/tecnologies/icons.png'
import javascript from '../../assets/images/tecnologies/js.png'
import typescript from '../../assets/images/tecnologies/ts.png'
import react from '../../assets/images/tecnologies/react.png'
import boots from '../../assets/images/tecnologies/boots.png'
import sass from '../../assets/images/tecnologies/sass.png'
import css from '../../assets/images/tecnologies/css.png'
import html from '../../assets/images/tecnologies/html.png'
import figma from '../../assets/images/tecnologies/figma.png'
import python from '../../assets/images/tecnologies/py.png'
import flask from '../../assets/images/tecnologies/flask.png'
import docker from '../../assets/images/tecnologies/docker.png'
import redux from '../../assets/images/tecnologies/redux.png'
import mu from '../../assets/images/tecnologies/mu.png'
import test from '../../assets/images/tecnologies/test.png'
import sc from '../../assets/images/tecnologies/sc.png'
import git from '../../assets/images/tecnologies/github.png'

export const Tec = () => {
  return (
    <>
      <div className="container">
        <Header color="secundary" active={2} />
        <SectionS>
          <div className="text-info">
            <h1>Tecnologias</h1>
            <p>
              Meu trabalho envolve o uso de uma variedade de tecnologias
              modernas e ferramentas que permitem a criação de soluções digitais
              robustas, eficientes e esteticamente agradáveis. Abaixo estão as
              principais tecnologias e ferramentas que utilizo em meus projetos:
            </p>
          </div>
          <img src={icons} alt="Computador, código, dinossauro e engrenagem" />
        </SectionS>
        <SectionTec>
          <div className="tec-card">
            <h3>JavaScript</h3>
            <img src={javascript} alt="javascript" />
          </div>
          <div className="tec-card">
            <h3>TypeScript</h3>
            <img src={typescript} alt="TypeScript" />
          </div>
          <div className="tec-card">
            <h3>React</h3>
            <img src={react} alt="React" />
          </div>
          <div className="tec-card">
            <h3>Bootstrap</h3>
            <img src={boots} alt="Bootstrap" />
          </div>
          <div className="tec-card">
            <h3>SASS</h3>
            <img src={sass} alt="SASS" />
          </div>
          <div className="tec-card">
            <h3>CSS</h3>
            <img src={css} alt="CSS" />
          </div>
          <div className="tec-card">
            <h3>HTML</h3>
            <img src={html} alt="HTML" />
          </div>
          <div className="tec-card">
            <h3>Figma</h3>
            <img src={figma} alt="Figma" />
          </div>
          <div className="tec-card">
            <h3>Python</h3>
            <img src={python} alt="Python" />
          </div>
          <div className="tec-card">
            <h3>Flask</h3>
            <img src={flask} alt="Flask" />
          </div>
          <div className="tec-card">
            <h3>Docker</h3>
            <img src={docker} alt="Docker" />
          </div>
          <div className="tec-card">
            <h3>Redux</h3>
            <img src={redux} alt="Redux" />
          </div>
          <div className="tec-card">
            <h3>Material UI</h3>
            <img src={mu} alt="Material ui" />
          </div>
          <div className="tec-card">
            <h3>React Testing</h3>
            <img src={test} alt="React Testing" />
          </div>
          <div className="tec-card">
            <h3>Styled Components</h3>
            <img src={sc} alt="Styled Components" />
          </div>
          <div className="tec-card">
            <h3>Git / GitHub</h3>
            <img src={git} alt="Git and Git Hub" />
          </div>
        </SectionTec>
      </div>
    </>
  )
}
