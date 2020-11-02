import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import styled from "styled-components";
export default function SingleProductPage() {
  return (
    <>
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;

          if (loading) {
            console.log("hello from loading");
            return <h1>product loading....</h1>;
          }
          const {
            company,
            description,
            id,
            price,
            title,
            image
          } = singleProduct;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      src={image}
                      // src={image}
                      alt="single product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">model :{title} </h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      company : {company}
                    </h5>
                    <h5 className="text-main text-capitalize mb-4">
                      price : ${price}
                    </h5>
                    <p className="text-capitalize text-title mt-3">
                      some info about product :
                    </p>
                    <p>{description}</p>
                    <AddtocartBtn
                      type="button"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                      onClick={() => addToCart(id)}
                    >
                      Add to Cart
                    </AddtocartBtn>
                    <BackLink>
                    <Link
                      to="/products"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                    >
                      back to products
                    </Link>
                    </BackLink>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}

const AddtocartBtn = styled.button`
  background-color: var(--redColor);
    color: var(--mainWhite);
    font-size: 20px;
    width: 200px;
    height:50px;
    cursor: pointer;
    border-radius: 50px;
    border-style : none;
    text-transform : capitalize;
`;
const BackLink = styled.div`
    display: inline-block;
    .main-link {
        padding : 7.5px 28px;
        text-decoration : none;
        background-color: var(--mainWhite);
        color: var(--redColor);
        font-size: 1.5rem;
        font-weight : 300;
        cursor: pointer;
        border: 1px solid  var(--redColor);
        border-radius: 5rem;
        text-transform : capitalize;
    }

`;