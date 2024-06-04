import Tag from '../Tag'
import {
  InfoContainer,
  Card,
  TitleContainer,
  Description,
  Info,
  Rating,
  Score,
  Title
} from './styles'
import star from '../../assets/images/star.svg'
import { ButtonLink } from '../Button/styles'
import { Restaurants } from '../../pages/Home'

import { getDescription } from '../Product'

type Props = {
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  Restaurants: Restaurants
}

const renderDestaqueTag = (destacado: boolean | undefined) => {
  if (destacado === true) {
    return <Tag>Destaques da Semana</Tag>
  }
  return null
}

const CardHome = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
  Restaurants
}: Props) => (
  <Card>
    <img src={capa} alt={titulo} />
    <Info>
      {renderDestaqueTag(destacado)}
      <Tag>{tipo}</Tag>
    </Info>
    <InfoContainer>
      <TitleContainer>
        <Title>{titulo}</Title>
        <Rating>
          <Score>{avaliacao}</Score>
          <img src={star} alt="Estrela Score" />
        </Rating>
      </TitleContainer>
      <Description>{getDescription(descricao)}</Description>
      <ButtonLink to={`/menu/${Restaurants.id}`} title={titulo}>
        Saiba mais
      </ButtonLink>
    </InfoContainer>
  </Card>
)

export default CardHome
