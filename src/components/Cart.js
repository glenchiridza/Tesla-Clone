import React from 'react';
import styled from 'styled-components';


function Cart() {
  return (
    <CartWrap>
        <h1>Your Cart is Empty</h1>
        <ButtonContinue>Continue Shopping</ButtonContinue>
        <ButtonSignIn>Sign In</ButtonSignIn>
    </CartWrap>
  )
}

export default Cart;

const CartWrap = styled.div`
    display:flex;
    flex-direction:column;
    background:#ffffff;
    height:100vh;
    width:100vw;
    justify-content:center;
    align-items:center;
    text-align:start;

`;
const ButtonContinue = styled.div`
    padding: 10px;
    text-transform:uppercase;
    font-size:13px;
    color:#fff;
    background:#3d69e1;
    justify-content:center;
    text-align:center;
    border-radius:54px;
    cursor:pointer;
    &:hover{
        background:blue;
    }
`;
const ButtonSignIn = styled(ButtonContinue)`
    color:#000;
    background:#ffffff;
    border:2px solid #111;
    transition: 0.3s;

    &:hover{
        background:rgba(0,0,0,0.9);
        color:#ffffff;
        border:2px solid #fff;
    }

`;