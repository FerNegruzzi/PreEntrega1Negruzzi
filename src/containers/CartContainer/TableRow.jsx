import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import { ImBin } from "react-icons/im";


const TableRow = ({ product }) => {



  const { removeProduct } = useContext(Shop)

  // const { total } = useContext(Shop)


  return (
    <tr>
      <th scope="row">{product.id}</th>
      <td><img src={product.image} alt="table-row" style={{ height: 200 }} /></td>
      <td>{product.title}</td>
      <td>${Math.round(product.price * product.quantity)}</td>
      <td>{product.quantity} units</td>
      <td><button onClick={() => removeProduct(product.id)}><ImBin/></button></td>
    </tr>
  )
}

export default TableRow


// {totalForProduct()}

// {total()}