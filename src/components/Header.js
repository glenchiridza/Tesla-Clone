import React from 'react';
import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import { selectCars } from '../features/car/carDataSlice';
import {useSelector} from 'react-redux';

function Header(){

    const [rightNavStatus,setRightNavStatus] = useState(false);
    const cars =useSelector(selectCars);

    return (

        <Container>
            <a>
                <img src='images/logo.svg' alt=''/>
            </a>
            <Menu>
                    {cars && cars.map((car,index)=> (

                        <a key={index} href='#'>{car}</a>
                
                        )
                    )}

                    <a href='#solar-panel'>Solar Panel</a>

                    <a href='#solar-roof'>Solar Roof</a>

                
                
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="">Account</a>

                <CustomMenu onClick={()=> setRightNavStatus(true)}>

                </CustomMenu>

            </RightMenu>

            <RightSideNav show={rightNavStatus}>
                <CloseButtonWrapper onClick={()=>setRightNavStatus(false)}>
                <CloseButton></CloseButton>
                </CloseButtonWrapper>
                <li><a hre="#">Existing Inventory</a></li>
                <li><a hre="#">Used Inventory</a></li>
                <li><a hre="#">Test-drive</a></li>
                <li><a hre="#">Trade-in</a></li>
                <li><a hre="#">Cybertruck</a></li>
                <li><a hre="#">Roadster</a></li>
                <li><a hre="#">Semi</a></li>
                <li><a hre="#">Charging</a></li>
                <li><a hre="#">Powerwall</a></li>
                <li><a hre="#">Commercial Energy</a></li>
                <li><a hre="#">Utilities</a></li>
                <li><a hre="#">Find us</a></li>
                <li><a hre="#">Support</a></li>
                <li><a hre="#">Inventor Relations</a></li>
            </RightSideNav>

        </Container>
    );
}

export default Header;

const Container = styled.div`
    min-height:65px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    z-index;1;
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
    @media(max-width:772px){
        display:none;
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
    padding:10px;
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;

`

const RightSideNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:#fff;
    width:250px;
    z-index:16;
    padding:18px;
    list-style:none;
    display:flex;
    flex-direction:column;
    text-align:start;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.3);
        font-weight:100;
        font-family: 'Open Sans Condensed',sans-serif;
        cursor:pointer;
    }
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.4s ease-in-out;
    

`

const CloseButton = styled(CloseIcon)`
    cursor:pointer;
`
const CloseButtonWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`