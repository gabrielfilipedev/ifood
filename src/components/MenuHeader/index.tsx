import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.svg'

import { open } from '../../store/reducers/cart'

import { CartButton, Header, HeaderContainer, LinkHome, Logo } from './styles'
import { RootReducer } from '../../store'

const ProductHeader = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Header>
      <HeaderContainer className="container">
        <Link to="/">
          <LinkHome>Restaurantes</LinkHome>
        </Link>
        <Link to="/">
          <Logo className="visible" src={logo}></Logo>
        </Link>
        <Logo className="invisible" src={logo}></Logo>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </HeaderContainer>
    </Header>
  )
}

export default ProductHeader
