import headerImage from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'
import { Image, Title } from './styles'

const Header = () => (
  <Image style={{ backgroundImage: `url(${headerImage})` }}>
    <div>
      <img src={logo} alt="logo" />
    </div>
    <Title>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Title>
  </Image>
)

export default Header
