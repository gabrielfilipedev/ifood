import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-size: auto 100%;
  font-weight: bold;

  div {
    display: flex;
    justify-content: center;
    padding-top: 64px;
  }

  img {
    width: 125px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  padding-top: 140px;
  color: ${colors.red};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`
