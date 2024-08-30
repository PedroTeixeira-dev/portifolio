import primaryLogo from '../../assets/images/home/logo.png'
import secundaryLogo from '../../assets/images/home/logo2.png'
import { HeaderS } from './styled'

export type Props = {
  color?: 'primary' | 'secundary'
  active?: number
}

const Header = ({ color = 'primary', active = 1 }: Props) => {
  return (
    <HeaderS color={color}>
      <img
        src={color === 'primary' ? primaryLogo : secundaryLogo}
        alt="P dev 42"
      />
      <nav>
        <ul>
          <li>
            <a className={active == 1 ? 'active' : ''} href="#">
              HOME
            </a>
          </li>
          <li>
            <a className={active == 2 ? 'active' : ''} href="#">
              TECNOLOGIAS
            </a>
          </li>
          <li>
            <a className={active == 3 ? 'active' : ''} href="#">
              PROJETOS
            </a>
          </li>
          <li>
            <a className={active == 4 ? 'active' : ''} href="#">
              SOBRE
            </a>
          </li>
          <li>
            <a className={active == 5 ? 'active' : ''} href="#">
              CONTATO
            </a>
          </li>
        </ul>
      </nav>
    </HeaderS>
  )
}

export default Header
