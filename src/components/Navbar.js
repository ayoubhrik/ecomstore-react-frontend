import React from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCart } from 'react-icons/io';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import logo from "../images/shoprite.png";
export default function Navbar() {
  return (<ProductConsumer>
    {value => {
      const { links, cartItems, handleSidebar, handleCart } = value;
      return (
        <NavWrapper>
          <div className="nav-center">
            <FaBars className="nav-icon humbericon" onClick={handleSidebar} />
            <img src={logo} alt="tech store logo" />
            <MenuWrapper className="menuwrapper">
              <ul>
                {links.map(link => {
                  return (
                    <li key={link.id}>
                      <Link
                        to={link.path}
                        className="sidebar-link"

                      >
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </MenuWrapper>
            <div className="nav-cart">
              <IoMdCart className="nav-icon" onClick={handleCart} />
              <div className="cart-items">{cartItems}</div>
            </div>
          </div>
        </NavWrapper>
      );
    }}
  </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
z-index:3;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainWhite);
  box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.06);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
    img {
      width:100px;
    }
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--redColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
  @media (min-width: 780px){
    .humbericon{
      display:none;
    }
  }
`;

const MenuWrapper = styled.nav`
ul {

  
  display: inline-flex;
    list-style-type: none;
    padding: 0 !important;
    margin-bottom:0 !important;
  }
  .sidebar-link {
    
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--redColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (max-width: 780px){
    display: none;

  }

`;