import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Header = styled.header`
  height: 186px;
  width: 100%;
  background-color: ${colors.orange};
  font-weight: 900;
  font-size: 18px;
  display: flex;
  align-items: center;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LinkHome = styled.a`
  color: #000;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;

    &.visible {
      display: flex;
    }
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  display: none;

  @media (max-width: ${breakpoints.mobile}) {
    &.visible {
      display: flex;
    }
  }

  @media (min-width: ${breakpoints.mobile}) {
    &.invisible {
      display: flex;
    }
  }
`

export const CartButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
`
