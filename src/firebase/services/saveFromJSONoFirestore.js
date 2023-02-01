import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";
import products from '../../data/products.json';

const saveFromJSONToFirebase = async () => {
    try {    
        products.forEach(async (product) => {
            const docRef = await addDoc(collection(db, "products"), {
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.image,
                stock: product.stock || 10,
                category: product.category,
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default saveFromJSONToFirebase;