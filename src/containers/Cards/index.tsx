import { Restaurants } from '../../pages/Home'
import CardHome from '../../components/Card'
import { List, ListContainer } from './styles'

type Props = {
  restaurants: Restaurants[]
}

const CardsList = ({ restaurants }: Props) => {
  return (
    <>
      <div className="container">
        <ListContainer>
          <List>
            {restaurants.map((type) => (
              <li key={type.id}>
                <CardHome
                  titulo={type.titulo}
                  destacado={type.destacado}
                  tipo={type.tipo}
                  avaliacao={type.avaliacao}
                  descricao={type.descricao}
                  capa={type.capa}
                  Restaurants={type}
                />
              </li>
            ))}
          </List>
        </ListContainer>
      </div>
    </>
  )
}

export default CardsList
