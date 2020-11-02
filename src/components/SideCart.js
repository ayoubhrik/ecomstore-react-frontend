import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { BsPlus, BsDash } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, cartTotal, increment, decrement, clearCart, removeItem } = value;
        return (
          <CartWrapper show={cartOpen} /* onClick={closeCart} */>
            <ul>
              {cart.map(item => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img
                      width="35"
                      src={item.image}
                      // src={item.image}
                      alt="cart item"
                    />
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-capitalize">Price ${item.price}</h6>
                      <h6 className="text-title text-capitalize">
                        Amount : <BsDash onClick={() => decrement(item.id)} /> {item.count} <BsPlus onClick={() => increment(item.id)} />
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              cart total : ${cartTotal}
            </h4>
            <div className="text-center my-5">
              <Link to="/checkout" className="">
                <CheckoutBtn>
                  Check out
            </CheckoutBtn>
              </Link>

              {/* 
            
             <Link to="/cart" className="main-link">
                cart page
              </Link>
            
            */}

              {/*    <CheckoutBtn>
                Check out
              </CheckoutBtn>
                   */}
            </div>

          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainWhite);
  z-index: 1;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  box-shadow: -1px 5px 4px 2px rgba(0,0,0,0.06);
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 30rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  li{
    border-bottom: 1px solid var(--mainBlack);
  }
  .cart-item {
    list-style-type: none;
  }


`;

const CheckoutBtn = styled.button`
  background-color: var(--mainBlack);
    color: var(--mainWhite);
    font-size: 20px;
    width: 200px;
    height:50px;
    cursor: pointer;
    border-style : none;
    text-transform : uppercase;
`;
