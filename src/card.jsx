import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/cart.css";

function Checkout() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('https://63a571e42a73744b008e23ee.mockapi.io/card');
            const updatedCartItems = response.data.map((item) => ({
                ...item,
                quantity: 1,
                totalPrice: item.price,
            }));
            setCartItems(updatedCartItems);
        } catch (error) {
            console.log(error);
        }
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const handleRemoveIteam = (itemID) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemID);
        setCartItems(updatedCartItems);
    };

    return (
        <div className="cart-body">
            <h2>You interested with {getTotalQuantity()} {getTotalQuantity() > 1 ? 'laptops' : 'laptop'}</h2>
                {cartItems.map((laptop) => (
                    <div className="cart-item" key={laptop.id}>
                        <div className="item-left">
                            <p>
                                <img src={laptop.image} alt=""></img>
                            </p>
                        </div>
                        <div className="item-right">
                            <div className="describe-item">
                                <p>{laptop.laptop_name}</p>
                                <p>{laptop.price}</p>
                            </div>
                            <div className="product-cart">
                                <div className="button-top">
                                    <button type="button" className="plus"><img src="https://media.istockphoto.com/id/688550958/vi/vec-to/d%E1%BA%A5u-c%E1%BB%99ng-m%C3%A0u-%C4%91en-k%C3%BD-hi%E1%BB%87u-t%C3%ADch-c%E1%BB%B1c.jpg?s=612x612&w=0&k=20&c=ZJYNJ7-s-CEFxNFaj6y4aYQmLlFe9wETgoAX5xj_wWk=" alt="" /> </button>
                                    <input type="text" readOnly className="cs-input-cart" value={laptop.quantity} min="1" max="10" />
                                    <button type="button" className="minus"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAPFBMVEX///8AAACenp67u7v7+/uhoaFHR0fq6urHx8dDQ0P1
                                    9fVqamqMjIzi4uJVVVURERHW1tZvb2+np6d4eHgq7X7jAAAAnUlEQVRoge3WORaDMBAE0RkQSGwSy/3vasuPgIxMHbj+BSqYoMcMAAAAAAAAAAAAb2Lqm0rxEU+TNzelOz5f7ePVNdd6WDR19yV886uq7r6abbq6+2aDMj9YVuazFWW+mLLuTp78n+Z
                                    HZX1ULk7dnF2Z380OXf2ob57s+uPv4Yui0cv3uxkGweyVLjx+3bNr6kwGAAAAAAAAAACANx+BBQ7K6UuK8gAAAABJRU5ErkJggg==" alt="" 
                                     /> </button>
                                </div>
                                <div className="button-bottom">
                                    <a onClick={() => handleRemoveIteam(laptop.id)}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CzLDzRlpu6SeZLnSyRruL-P4tSPxX48G5zTHrznvt1aJFEbAvcsEOi-b0IdoD9DMsSE&usqp=CAU" alt="" style={{width: "72px"}} />
                                    </a>
                                </div>
                            </div>
                            <div className="price-item">
                                <p>{laptop.totalPrice}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <br />
                <div>
                    <button>Checkout</button>
                </div>
        </div>
        
        
    );
}

export default Checkout;
