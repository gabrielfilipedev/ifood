import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  position: relative;
  background-color: ${colors.white};
  border: solid 1px ${colors.red};
  max-width: 472px;
  width: 100%;

  img {
    top: 0px;
    left: 0px;
    width: 472px;
    height: 217px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 600px;
    width: 100%;

    img {
      width: 600px;
      width: 100%;
    }
  }
`

export const InfoContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: ${colors.red};
  margin-top: 8px;
  display: block;
  padding-right: 8px;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  h3 {
    width: 70%;
    margin-top: 0;
    white-space: nowrap;
  }
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const Info = styled.div`
  position: absolute;
  display: flex;
  gap: 4px;
  top: 16px;
  right: 16px;
`
export const Score = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  align-items: center;
`
export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
  width: 100%;

  img {
    width: 21px;
    height: 21px;
  }
`
