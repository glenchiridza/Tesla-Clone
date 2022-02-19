import React from 'react'
import styled from 'styled-components'
function Section() {
  return (
    <Wrap>
        <ContentText>
            <h1>Model S</h1>
            <p>Order Online for Touchless Delivery</p>
        </ContentText>

    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-image:url('/images/model-s.jpg');
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
`

const ContentText = styled.div`
    padding-top:14vh;
    text-align:center;
`