import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom"

const Cart =() =>{
    const cart =useSelector((state) => state.cart);
    return(
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            { cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p> Your cart is empty</p>
                    <div>
                        <Link to="/">
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ):(
               <div>
                   <div className="titles">
                       <h3 className="product-title"></h3>
                       <h3 className="price"></h3>
                       <h3 className="quantity"></h3>
                       <h3 className="total"></h3>
                   </div>
        <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <button >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button >
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button >+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
               </div>
            )}
        </div>

    )
}


export default Cart;