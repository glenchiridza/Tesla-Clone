import React from 'react'

function Cart() {
  return (
    <div>Cart</div>
  )
}

export default Cart;


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
const ButtonSignIn = styled(SignInButton)`
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