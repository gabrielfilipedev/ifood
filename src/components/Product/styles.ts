import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  display: flex;
  background-color: ${colors.red};
  flex-direction: column;
  align-items: baseline;
  position: relative;
  padding: 8px;
  width: 100%;

  img {
    top: 0px;
    left: 0px;
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

  button {
    width: 100%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 600px;
    width: 100%;

    img {
      width: 600px;
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 400px;
    width: 100%;

    img {
      width: 400px;
      width: 100%;
    }
  }
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
  color: ${colors.orange};
  margin-top: 8px;
  display: block;
`

export const Description = styled.p`
  color: ${colors.orange};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
`
