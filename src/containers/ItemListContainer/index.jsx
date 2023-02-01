import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import useFirebase from '../../hooks/useFirebase';

const ItemListContainer = () => {

    const { categoryId } = useParams()

    const [products, loading, error] = useFirebase(categoryId)

    console.log(products);

    return (
        <>
        {error && <h1>Ups... Hubo un error: {error}</h1>}
        {
            loading ? 
                <h1>Loading...</h1>
                : <ItemList productos={products}/>
        }
        </>
    )
}

export default ItemListContainer