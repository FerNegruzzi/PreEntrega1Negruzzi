import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()
  useEffect(()=> {
    fetch("/productos.json")
      .then(response => {
        return response.json()
      })
      .then(product => {
        const productDetailId = product.find(producto => producto.id == id)
        setDetail(productDetailId)
      })
      .catch((err) => {
        alert("Oh no! Hubo un error.")
      });

  }, [id])

  return (
    <div>
        {
          Object.keys(detail).length === 0 
            ? <h2>Loading ...</h2>
            : <ItemDetail detail={detail}/>
        }
    </div>
  )
}

export default ItemDetailContainer