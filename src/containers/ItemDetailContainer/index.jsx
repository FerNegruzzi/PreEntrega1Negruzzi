import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import {Spinner} from 'reactstrap';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const { id } = useParams()
  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const productDetail = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setDetail(productDetail)
      } else {
        console.log("No such document!");
      }
    }
    getProduct();
  }, [id])

  return (
    <div>
      {
        Object.keys(detail).length === 0
          ? <Spinner style={{marginTop:'20em'}} size={'5em'}/>
          : <ItemDetail detail={detail} />
      }
    </div>
  )
}

export default ItemDetailContainer