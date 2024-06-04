import Products from '../../components/Product'
import { List, ListContainer } from './styles'

import { Restaurants } from '../../pages/Home'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductsList = () => {
  const { id } = useParams()

  const [foods, setFoods] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((response) => setFoods(response))
  }, [id])

  if (!foods) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <div className="container">
        <ListContainer>
          <List>
            {foods?.cardapio.map((food) => (
              <li key={food.id}>
                <Products restaurant={food} restaurants={foods} />
              </li>
            ))}
          </List>
        </ListContainer>
      </div>
    </>
  )
}

export default ProductsList
