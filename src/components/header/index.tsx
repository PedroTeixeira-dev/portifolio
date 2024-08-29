import logo from '../../assets/images/logo.png'
import { HeaderS } from './styled'

const Header = () => {
  return (
    <HeaderS>
      <img src={logo} alt="P dev 42" />
      <nav>
        <ul>
          <li>
            <a className="active" href="#">
              HOME
            </a>
          </li>
          <li>
            <a href="#">TECNOLOGIAS</a>
          </li>
          <li>
            <a href="#">PROJETOS</a>
          </li>
          <li>
            <a href="#">SOBRE</a>
          </li>
          <li>
            <a href="#">CONTATO</a>
          </li>
        </ul>
      </nav>
    </HeaderS>
  )
}

export default Header
