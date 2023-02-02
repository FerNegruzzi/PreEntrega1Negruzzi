import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import ItemCount from "../ItemCount";
import "./style.scss";
import { HiShoppingCart } from "react-icons/hi";

const ItemDetail = ({ detail }) => {

    const [quantity, setQuantity] = useState(0)

    const { addProduct } = useContext(Shop)

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        addProduct({ ...detail, quantity: cantidad })
    }

    return (
        <div className="detail-container">
            <img className="detail-img" src={detail.image} alt="detail" />
            <aside className="detail-aside">
                <h3>{detail.title}</h3>
                <h5>{detail.description}</h5>
                <p>{detail.price}</p>
                {
                    quantity === 0 ?
                        <ItemCount
                            stock={detail.stock}
                            initial={1}
                            onAdd={onAdd}
                        />
                        :
                        <button className="btn btn-primary p-2">
                            <Link to="/cart">
                                <HiShoppingCart style={{ color: 'black' }} size={'2em'} />
                            </Link>
                        </button>
                }
            </aside>
        </div>
    );
};

export default ItemDetail;
