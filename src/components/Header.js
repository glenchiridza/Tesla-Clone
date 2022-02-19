import React from 'react';
import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu";

function Header(){
    return (

        <Container>
            <a>
                <img src='images/logo.svg' alt=''/>
            </a>
            <Menu>
            
                    <a href='#model3'>Model 3</a>
                
            
                    <a href='#modelS'>Model Y</a>
                
            
                    <a href='#modelS'>Model S</a>
                
            
                    <a href='#modelS'>Model X</a>

                    <a href='#solar-panel'>Solar Panel</a>

                    <a href='#solar-roof'>Solar Roof</a>

                
                
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="">Account</a>

                <CustomMenu>

                </CustomMenu>

            </RightMenu>

        </Container>
    );
}

export default Header;

const Container = styled.div`
    min-height:65px;
    position:fixed;
    display:flex;
    align-items:center;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:600;
        padding:0 10px;
        flex-wrap:no-wrap;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
    font-weight:600;
    margin-right:10px;
    flex-wrap:no-wrap;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
    
`