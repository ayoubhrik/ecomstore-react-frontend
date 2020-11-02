import React, { Component } from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
export default class CheckoutPage extends Component {
    state = {
        fullname: '',
        streetaddress: '',
        city: '',
        state: '',
        zipcode: '',
        phonenumber: ''
    };
    mySubmitHandler = (event) => {
        event.preventDefault();

    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <>
                <ProductConsumer>
                    {value => {
                        const { cart, cartTotal } = value;
                        return (
                            <div className="container  my-5">
                                <div className="row">

                                    <CheckoutWrapper className="col">
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
                                                            <h6 className="text-uppercase">{item.title}<span className="text-capitalize"> - Price ${item.price} - </span><span className="text-title text-capitalize">Amount : {item.count}</span></h6>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <h4 className="text-capitalize text-main">
                                            cart total : ${cartTotal}
                                        </h4>
                                    </CheckoutWrapper>
                                    <div className="col-sm-12 col-md-6">
                                        <FormWrapper>
                                            <form
                                                onSubmit={this.mySubmitHandler}
                                            >
                                                <h1>Order :  {this.state.fullname} {this.state.phonenumber}</h1>
                                                {/* first */}
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="fullname"
                                                        onChange={this.myChangeHandler}
                                                        placeholder="john smith"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="streetaddress"
                                                        onChange={this.myChangeHandler}
                                                        placeholder="210 N Chapel Ave"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        onChange={this.myChangeHandler}
                                                        placeholder="Alhambra"
                                                    />
                                                </div>
                                                {/* email */}
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="state"
                                                        onChange={this.myChangeHandler}
                                                        placeholder="Los Angelos"
                                                    />
                                                </div>
                                                {/* subject */}
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="zipcode"
                                                        onChange={this.myChangeHandler}
                                                        placeholder="91801"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="phonenumber"
                                                        onChange={this.myChangeHandler}
                                                        placeholder="+1 562 8522 32"
                                                    />
                                                </div>
                                                {/* submit */}
                                                <div className="form-group mt-3">
                                                    <input
                                                        type="submit"
                                                        value="Place Order"
                                                        className="checkoutbtn"
                                                    />
                                                </div>
                                            </form>
                                        </FormWrapper>
                                    </div>

                                </div></div>
                        );

                    }}
                </ProductConsumer>
            </>
        );
    }
}

const CheckoutWrapper = styled.div`

  ul {
    padding: 0 !important;
  }
  li{
    
  }
  .cart-item {
    list-style-type: none;
  }


`;

const FormWrapper = styled.div`
input{
    width: 100%;
    height: 4rem;
    font-size: 1.2rem;
    border-width: 1px;
    border-style: solid;
    border-color: transparent transparent var(--mainBlack);
    border-image: initial;
    border-bottom: 1px solid var(--mainBlack);
}
input:focus , input:active {
    outline: none !important;
}
.checkoutbtn{
    color:var(--mainWhite);
    background-color :var(--mainBlack);
}

`;