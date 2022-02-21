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

        <BestSeller>
            <p>Best Seller</p>
            <div>
                <img src="images/models.avif" />
                <h2>Model S Accessories</h2>
            </div>

            <CenterModel>
                <ImageLeft>
                    <img src="images/model3.avif" />
                    <h2>Model 3 Accessories</h2>
                </ImageLeft>
                <ImageRight>
                    <img src="images/modelx.avif" />
                    <h2>Model X Accessories</h2>
                </ImageRight>
                  
            </CenterModel>
            

            <BottomModel>
                <ModelY>
                    <img src="images/model_y.avif" />
                    <h2>Model Y Accessories</h2>
                </ModelY>
            </BottomModel>
        </BestSeller>

        

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

`;

const BestSeller = styled.div`
    margin:1.5%;
    p{
        width:100vw;
        text-align:start;
        margin-top:5%;
        margin-bottom:2%;
        text-transform:uppercase;
        font-weight:200;
    }
    img{
        min-height:350px;
        max-height:350px;
        width:100vw;
        object-fit:cover;
    }
    h2{
        font-family:'Times New Roman', sans-serif;
        position:absolute;
        top:140vh;
        right:12vw;

    }
    
`
const CenterModel = styled.div`

    margin:1.5%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:100vw;

`;


const ImageLeft = styled.div`
    h2{
        position:relative;
        top:-30vh;
        left:3vw;
        color:#fff;
        font-weight:600;
    }
    img{
        width:50vw;
        object-fit:cover;
        padding:10px;
    }
`

const ImageRight = styled(ImageLeft)`

`
const  BottomModel = styled(CenterModel)`
    
`
const ModelY = styled.div`
    h2{
        position:relative;
        top:-30vh;
        right:21vw;
        font-weight:600;
    }
`