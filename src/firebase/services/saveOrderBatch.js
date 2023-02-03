import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"
import Swal from 'sweetalert2'

const saveOrderBatch = (cart, orden) => {
    console.log("Guardar orden");
    
    const batch = writeBatch(db)

    const outOfStock = []
    
    cart.forEach((productoEnCart) => {
        getDoc(doc(db, 'products', productoEnCart.id))
        .then(async (documentSnapshot) => {

            const producto = {...documentSnapshot.data(), id: documentSnapshot.id};

            if (producto.stock >= productoEnCart.quantity) {
                batch.update(doc(db, 'products', producto.id) ,{
                    stock: producto.stock - productoEnCart.quantity
                })
            } else {
                outOfStock.push(producto)
            }
            if (outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), orden).then(({ id }) => {
                    batch.commit().then(() => {
                        Swal.fire(
                            'Purchase confirmed! :)',
                            'Se genero la order con id: ' + id,
                            'success'
                          )
                    })
                }).catch((err) => {
                    console.log(`Error: ${err.message}`);
                })
            } else {
                let mensaje = ''
                for (const producto of outOfStock) {
                    mensaje += `${producto.title}`
                }
                Swal.fire(
                    'Sin stock',
                    `Productos fuera de stock: ${mensaje}`,
                    'error'
                  )
            }
        })
    })
}

export default saveOrderBatch;