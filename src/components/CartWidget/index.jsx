import React, { useContext } from 'react'
import { HiShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';

const CartWidget = () => {
  // consuimir el context para que figure la cant de productos

  const { countCart } = useContext(Shop)


  return (
    <>
      <Link to="/cart" style={{display:'flex'}}>
        <HiShoppingCart style={{color:'black'}} size={'2em'}/>
        <span style={{color:'black'}}>{countCart()}</span>
      </Link>
    </>
  )
}

export default CartWidget