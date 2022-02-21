import React from 'react';
import { useState } from 'react';
import { selectCars } from '../features/car/carDataSlice';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import { Container,Menu,RightMenu,RightSideNav,
    CustomMenu ,CloseButton,CloseButtonWrapper} from '../shared/MainHeaderConstants';

function Header(){

    const [rightNavStatus,setRightNavStatus] = useState(false);
    const cars =useSelector(selectCars);


    return (


        <Container>
            <Link to='/' >
                <img src='images/logo.svg' alt=''/>
            </Link>
            <Menu>

                 {cars && cars.map((car,index)=>(
                        <a key={index} href={`#${car.replace(" ","")}`}>{car}</a>
                        ))}

                    <a href='#solar-panel'>Solar Panel</a>

                    <a href='#solar-roof'>Solar Roof</a>
                

            </Menu>

            <RightMenu>
                <a href="/shop" >Shop</a>
                <Link to='/account'>Account</Link>

                <CustomMenu onClick={()=> setRightNavStatus(true)}>

                </CustomMenu>

            </RightMenu>

            <RightSideNav show={rightNavStatus}>
                <CloseButtonWrapper onClick={()=>setRightNavStatus(false)}>
                <CloseButton></CloseButton>
                </CloseButtonWrapper>
                {cars && cars.map((car,index)=> (

                    <li key={index} ><a href={`#${car}`}>{car}</a></li>

                ))}
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
