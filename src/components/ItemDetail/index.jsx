import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCounter";
import "./style.scss";

const ItemDetail = ({ detail }) => {

    const [quantity, setQuantity] = useState(0)

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
    }

    return (
        <div className="detail-container">
            <img className="detail-img" src={detail.image} alt="detail" />
            <aside className="detail-aside">
                <h4>{detail.title}</h4>
                {
                    quantity === 0 ?
                    <ItemCount 
                        stock={32} 
                        initial={1} 
                        onAdd={onAdd}    
                    />
                    :
                    <button className="btn btn-primary p-2">
                        <Link to="/cart">
                            Go cart
                        </Link>
                    </button>
                }
            </aside>
        </div>
    );
};

export default ItemDetail;
