import React from "react";
import Product from "../Product";
import { Link } from "react-router-dom";
import Title from "../Title";
import styled from "styled-components"
import { ProductConsumer } from "../../context";

export default function Featured() {
    return (
        <section className="py-5">
            <div className="container">
                {/* title */}
                <Title title="featured products" center="true" />
                {/* products */}
                <div className="row">
                    <ProductConsumer>
                        {value => {
                            const { featuredProducts } = value;

                            return featuredProducts.map(product => (
                                <Product key={product.id} product={product} />
                            ));
                        }}
                    </ProductConsumer>
                </div>
                <LinkWrapper>
                    <div className="reproducts row mt-3">
                        <div className="col text-center">
                            <Link to="/products" className="main-link">
                                Our Products
                            </Link>
                        </div>
                    </div>
                </LinkWrapper>
            </div>
        </section>
    );
}
const LinkWrapper = styled.div`
    .main-link {
        padding : 10px 30px;
        text-decoration : none;
        background-color: var(--mainWhite);
        color: var(--redColor);
        font-size: 1.5rem;
        font-weight : 300;
        cursor: pointer;
        border: 1px solid  var(--redColor);
        border-radius: 5rem;
    }
    .main-link:hover {

        background-color: var(--redColor);
        color: var(--mainWhite);
    }
`;
