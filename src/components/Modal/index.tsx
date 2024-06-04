import React from 'react'
import {
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalImage,
  ModalOverlay
} from './styles'
import Button from '../Button'
import closeImg from '../../assets/images/close.png'
import { MenuItem } from '../../pages/Home'
import { formatPrice } from '../Product'

type ModalProps = {
  showModal: boolean
  onClose: () => void
  restaurant: MenuItem
  addCart: () => void
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  onClose,
  restaurant,
  addCart
}) => {
  return (
    <ModalOverlay
      className={showModal ? 'visible' : ''}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <ModalContainer>
        <ModalImage src={restaurant.foto} />
        <ModalContent>
          <h2>{restaurant.nome}</h2>
          <p>{restaurant.descricao}</p>
          <span>{restaurant.porcao}</span>
          <Button
            type={'button'}
            title={''}
            to={'/teste'}
            onClick={() => {
              addCart()
              onClose()
            }}
          >
            <>Adicionar ao carrinho - {formatPrice(restaurant.preco)}</>
          </Button>
        </ModalContent>
        <CloseButton>
          <img src={closeImg} alt="Close" onClick={onClose} />
        </CloseButton>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal
