import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home(){
    return (
        <Container>
            <Section title="Model 3"
            backgroundImage = "model-3.jpg" 
            description="Order Online for Touchless Delivery"
            leftButtonText="Custom Order"
            rightButtonText="Existing Inventory"/>

        <Section title="Model Y"
            backgroundImage = "model-y.jpg" 
            description="Order Online for Touchless Delivery"
            leftButtonText="Custom Order"
            rightButtonText="Existing Inventory"/>
        
        <Section title="Model S"
            backgroundImage = "model-s.jpg" 
            description="Order Online for Touchless Delivery"
            leftButtonText="Custom Order"
            rightButtonText="Existing Inventory"/>


        <Section title="Model X"
            backgroundImage = "model-x.jpg" 
            description="Order Online for Touchless Delivery"
            leftButtonText="Custom Order"
            rightButtonText="Existing Inventory"/>

        <Section title="Solar Panels"
            backgroundImage = "solar-panel.jpg" 
            description="Lowest Cost Solar Panels in America "
            leftButtonText="Order Now"
            rightButtonText="Learn More"/>

        <Section title="Solar Roof"
            backgroundImage = "solar-roof.jpg" 
            description="Produce Clean Energy From Your Roof "
            leftButtonText="Order Now"
            rightButtonText="Learn More"/>
        
        <Section title="Accessories"
            backgroundImage = "accessories.jpg" 
            leftButtonText="Shop Now"/>

        </Container>
    );
}

export default Home;

const Container = styled.div`
height:100vh;

`