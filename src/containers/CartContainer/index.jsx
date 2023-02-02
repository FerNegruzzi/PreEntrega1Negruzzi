import React, { useContext, useState } from 'react'
import TableRow from './TableRow'
import { Shop } from '../../context/ShopProvider';
import generateOrderObject from '../../firebase/services/generateOrderObject';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import {Spinner} from 'reactstrap';
import FormComp from '../../components/Form';
// import { type } from '@testing-library/user-event/dist/type';

const Cart = () => {

  const { products, total, cleanCart } = useContext(Shop);

  const [formVis, setFormVis] = useState(false);

  const [loader, setLoader] = useState(false);


  const confirmPurchase = async (data) => {
    const {firstName: nombre, email, phone: telefono } = data

    try {
      setLoader(true);

      const order = generateOrderObject({
        nombre,
        email,
        telefono,
        cart: products,
        total: total()
      })

      console.log(order);
      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart()
      for (const productCart of products) {
        const productRef = doc(db, "products", productCart.id);
        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity
        });
      }

      alert("Orden confirmada con ID: " + docRef.id);

    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      setFormVis(false);
    }
  }

  return (
    <>
      {
        products.length !== 0 ?
          <>
            <table className='table table-success table-striped'>
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Image</th>
                  <th scope="col">title</th>
                  <th scope="col">price</th>
                  <th scope="col">quantity</th>
                  <th scope="col">remove</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => {
                  return <TableRow key={product.id} product={product} />
                })}
              </tbody>
            </table>
              
              
              {

                loader ?
                <Spinner style={{marginTop:'20em'}} size={'5em'}/>
                :
                
                <>
                <h2>Cart Total: </h2><h3>${total()}</h3>
                <button onClick={() => setFormVis(true)} style={{marginRight:'10px'}}>Confirm purchase</button>
                <button onClick={cleanCart}>Clean Cart</button></>
              } 
          </>
          :
          <>
            <h1>No hay productos en el carrito.</h1>
            <button>
              <Link to="/"><ImHome /></Link>
            </button>
          </>
      }
      { formVis ? 
        <FormComp
          confirmPurchase = {confirmPurchase}
          formVis = {formVis}
          setFormVis = {setFormVis}
          />
        : null
      }
    </>
  )
}

export default Cart