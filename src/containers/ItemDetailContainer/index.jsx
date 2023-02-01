import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const { id } = useParams()
  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const productDetail = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setDetail(productDetail)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getProduct();

    // fetch("../products.json")
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(product => {
    //     const productDetailId = product.find(producto => producto.id === parseInt(id))
    //     setDetail(productDetailId)
    //   })
    //   .catch((err) => {
    //     alert("Oh no! Hubo un error.")
    //     console.log(err);
    //   });

  }, [id])

  return (
    <div>
      {
        Object.keys(detail).length === 0
          ? <h2>Loading ...</h2>
          : <ItemDetail detail={detail} />
      }
    </div>
  )
}

export default ItemDetailContainer