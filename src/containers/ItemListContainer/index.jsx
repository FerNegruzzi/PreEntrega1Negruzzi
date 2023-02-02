import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import useFirebase from '../../hooks/useFirebase';
// import { ImSpinner10 } from "react-icons/im";
import {Spinner} from 'reactstrap';
// import { useEffect } from 'react';
// import saveFromJSONToFirebase from '../../firebase/services/saveFromJSONoFirestore';

const ItemListContainer = () => {

    const { categoryId } = useParams()

    const [products, loading, error] = useFirebase(categoryId)

    // useEffect(()=> {
    //     saveFromJSONToFirebase()
    // }, [])

    return (
        <>
        {error && <h1>Ups... Hubo un error: {error}</h1>}
        {
            loading ? 
                <Spinner style={{marginTop:'20em'}} size={'5em'}/>
                : <ItemList productos={products}/>
        }
        </>
    )
}

export default ItemListContainer