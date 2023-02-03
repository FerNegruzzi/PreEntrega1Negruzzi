
const generateOrderObject = ({
    nombre = "", 
    email1 = "", 
    telefono = "", 
    cart = [], 
    total = 0
}) => {
    return {
        buyer: {
            nombre: nombre,
            email: email1,
            telefono: telefono,
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrderObject;