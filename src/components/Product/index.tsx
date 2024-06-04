import { useDispatch } from 'react-redux'

import { Card, Description, Title } from './styles'
import Button from '../Button'
import { useState } from 'react'

import { add, open } from '../../store/reducers/cart'
import { MenuItem, Restaurants } from '../../pages/Home'
import Modal from '../Modal'

type Props = {
  restaurant: MenuItem
  restaurants: Restaurants
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getDescription = (description: string) => {
  if (description.length > 240) {
    return description.slice(0, 240) + '...'
  }
  return description
}

const Products = ({ restaurant }: Props) => {
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(restaurant))
    dispatch(open())
  }

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Card>
        <img src={restaurant.foto} />
        <Title>{restaurant.nome}</Title>
        <Description>{getDescription(restaurant.descricao)}</Description>
        <Button
          to=""
          type={'button'}
          title={''}
          onClick={() => setShowModal(true)}
        >
          <>Adicionar ao carrinho</>
        </Button>
      </Card>
      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        restaurant={restaurant}
        addCart={addCart}
      />
    </>
  )
}

export default Products
