import React from 'react'

const Item = ({title}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src="https://drifters.com.ar/uploads/product_image/23464/DriftersPDP_APP_TRSH330100-080_Shot1.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Buzo negro marca Thraser sin capucha</p>
                    <a href="/#" className="btn btn-primary">Comprar</a>
                </div>
        </div>
    )
}

export default Item