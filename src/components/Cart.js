import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Cart() {
  return (
    <CartWrap>
        <Content>
            <p>Hi glen chiridza</p>
            <h1>Your Cart is Empty</h1>
            <CartLink>
                <Link to='/shop'><ButtonContinue>Continue Shopping</ButtonContinue></Link>
                <Link to='/account'><ButtonSignIn>Sign In</ButtonSignIn></Link>
            </CartLink>
        </Content>
        
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
    justify-content:start;
    align-items:start;
    text-align:start;

   
`;
const Content = styled.div`
    width:26vw;
    margin-left:10%;
    margin-top:10%;

    @media (max-width:480px){
        margin:2%;
    }
`;

const CartLink = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    a{
        margin-right:10px;
    }

`;
const ButtonContinue = styled.div`
    width:20vw;
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