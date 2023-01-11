import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState({})

    const {categoryId} = useParams()
    console.log(categoryId);

    useEffect(()=> {
        setTimeout(() => {
            fetch("/products.json")
                .then(response => {
                    return response.json()
                })
                .then(products => {
                    if (categoryId) {
                        const productosFiltradosPorCategoria = products.filter(producto => producto.category === categoryId)
                        console.log(productosFiltradosPorCategoria)
                        setProducts(productosFiltradosPorCategoria)
                    } else {
                        setProducts(products)
                    }
                })
                .catch((err) => {
                    alert("Oh no! Hubo un error.")
                    console.log(err);
                });
            }, 2000);
            
    }, [categoryId])
    return (
        <div>
            {
                Object.keys(products).length === 0
                ? <h2>Loading...</h2>
                : <ItemList productos={products}/>
                
            }
        </div>
    )
}

export default ItemListContainer