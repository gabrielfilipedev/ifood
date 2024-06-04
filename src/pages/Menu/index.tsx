import ProductList from '../../containers/Products'
import ProductHeader from '../../components/MenuHeader'

import { useGetMenuQuery } from '../../services/api'
import { useParams } from 'react-router-dom'
import ProductBanner from '../../components/Banner'

const ProductMenu = () => {
  const { id } = useParams()

  const { data: foods } = useGetMenuQuery(id!)

  if (!foods) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ProductHeader />
      <ProductBanner
        capa={foods.capa}
        tipo={foods.tipo}
        titulo={foods.titulo}
      />
      <ProductList />
    </>
  )
}

export default ProductMenu
