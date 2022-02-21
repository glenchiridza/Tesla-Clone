import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Menu,RightMenu } from '../shared/ShopHeaderConstants';

function ShopHeader(){

    return (

        <Container>
            <Link to='/' >
                <img src='images/logo.svg' alt=''/>
            </Link>
            <Menu>


                    <a href='#solar-panel'>Solar Panel</a>

                    <a href='#solar-roof'>Solar Roof</a>
                

            </Menu>

            <RightMenu>
                <a href="/shop" >Shop</a>
                <Link to='/account'>Account</Link>

            </RightMenu>

            
        </Container>
    );
}

export default ShopHeader;
