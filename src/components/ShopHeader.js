import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Menu,RightMenu,SearchLinkIcon,CartLinkIcon } from '../shared/ShopHeaderConstants';

function ShopHeader(){

    return (

        <Container>

            <p id='shop-left'>
                <a href='/' >
                    <img src='images/logo.svg' alt='' id='logo'/>
                </a>
                |

                <Link to='/shop'>Shop</Link></p>

            <Menu>


                    <a href='#charging'>Charging</a>

                    <a href='#accessories'>Vehicle Accessories</a>

                    <a href='#apparel'>Apparel</a>

                    <a href='#lifestyle'>Lifestyle</a>
                

            </Menu>

            <RightMenu>
                <SearchLinkIcon></SearchLinkIcon>
                <a href="/cart" ><CartLinkIcon></CartLinkIcon></a>
                <Link to='/account'>Account</Link>

            </RightMenu>

            
        </Container>
    );
}

export default ShopHeader;
