import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Menu,RightMenu } from '../shared/ShopHeaderConstants';

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


                    <a href='#solar-panel'>Charging</a>

                    <a href='#solar-roof'>Vehicle Accessories</a>

                    <a href='#solar-roof'>Apparel</a>

                    <a href='#solar-roof'>Lifestyle</a>
                

            </Menu>

            <RightMenu>
                <a href="/shop" >Shop</a>
                <Link to='/account'>Account</Link>

            </RightMenu>

            
        </Container>
    );
}

export default ShopHeader;
