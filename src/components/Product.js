import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context";

export default function Product({ product }) {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value;
        return (

          <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6  col-lg-3 my-3">
            <div className="card">
              <Link
                to={`/products/${product.id}`}
                onClick={() => setSingleProduct(product.id)}
                className="linktosingleproduct"
              >
                <div className="img-container">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt="product"
                    style={{ height: "320px" }}
                  />
                  <div className="product-icons">
                    {/*
                 <Link
                    to={`/products/${product.id}`}
                    onClick={() => setSingleProduct(product.id)}
                  >
                    <FaSearch className="icon" />
                  </Link>
                 */}
                    <FaCartPlus
                      className="icon"
                      onClick={() => addToCart(product.id)}
                    />
                  </div>
                </div>
                <div className="card-body d-flex flex-column p-3">
                  <p className="mb-0">{product.title}</p>
                  <p className="mb-0 text-main">${product.price}</p>
                </div>
              </Link>
            </div>
          </ProductWrapper>

        );
      }}
    </ProductConsumer>
  );
}

const ProductWrapper = styled.div`
  .card {
    height: 100%;
    border: none;
  }
  .card:hover {
    cursor: pointer;
   
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .img-container {
    position: relative;
    img {
      object-fit: cover;
    }
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--mainWhite);
    background: var(--redColor);
    border-radius: 0.5rem;
  }
  .card:hover .product-icons {
    opacity: 1;
  }
  .card-body {
    font-weight: 500;
    text-transform: capitalize;
  }
  .linktosingleproduct{
    text-decoration:none !important;
    color:var(--mainBlack);
  }
`;
