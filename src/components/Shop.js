import React from 'react'
import styled from 'styled-components'

function Shop() {
  return (
    <HeadContainer>
        <HeadBackImage></HeadBackImage>
    </HeadContainer>
  )
}

export default Shop

const HeadContainer = styled.div`
    
`
const HeadBackImage = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-repeat:no-repeat;
    background-image:url('/images/tesla-charge.avif');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`