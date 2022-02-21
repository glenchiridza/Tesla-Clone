import React from 'react'
import styled from 'styled-components'

function Shop() {
  return (
    <HeadContainer>
        <HeadBackImage>
            <div>
                <h1>Wall Connector</h1>
                <p>The fastest way to charge at home</p>
            </div>
        </HeadBackImage>

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
    justify-content:center;
    align-items:center;
    *{
        color:#ffffff;
    }
    div{
        margin-bottom:10%;
    }
    h1{
        font-size:18px;
        text-transform:uppercase;
    }
    p{
        font-size:22px;
    }


`