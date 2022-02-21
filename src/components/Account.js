import React from 'react';
import styled from 'styled-components';

function Account(){
    return (
        
        <AccountWrap>
        <AuthFields>
            <h1>Sign In</h1>

            <label htmlFor='email'>Email Address</label>
            <input type="email"  id="email"/>

            <label htmlFor='password'>Password</label>
            <input type="password" id="password"/>
            <SignInButton>
                Sign In
            </SignInButton>

            <Forgotten>
                <a href="">Forgot email?</a> | <a href="">Forgot password?</a>
                <p><span></span>OR<span></span></p>
            </Forgotten>
            <CreateAccountButton>
                Create Account
            </CreateAccountButton>
        </AuthFields>
    </AccountWrap>

    );
}

export default Account;



//acount wrap
const AccountWrap = styled.div`
    display:flex;
    flex-direction:column;
    background:#ffffff;
    height:100vh;
    width:100vw;
    justify-content:center;
    align-items:center;
    text-align:start;

    h1{
        margin-bottom:6%;
    }

    label{
        margin-left:6%;
        font-weight:600;
        font-size:13px;
        color:#9a9b9d;
        
    }
    
`

const AuthFields = styled.div`
    width:26vw;
    margin:auto;
    justify-content:center;
    align-items:center;
`

const SignInButton = styled.div`
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
`
const Forgotten = styled.div`
    padding:20px;
    margin-top:8px;
    font-size:14px;
    text-align:center;

    p {
        margin:10px;
    }
`

const CreateAccountButton = styled(SignInButton)`
    color:#000;
    background:#ffffff;
    border:2px solid #111;
    transition: 0.3s;

    &:hover{
        background:rgba(0,0,0,0.9);
        color:#ffffff;
        border:2px solid #fff;
    }

`