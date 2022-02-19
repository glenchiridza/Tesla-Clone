import React from 'react'
import styled from 'styled-components'
function Section() {
  return (
    <Wrap>
        <ContentText>
            <h1>Model S</h1>
            <p>Order Online for Touchless Delivery</p>
        </ContentText>

        <ActionButtons>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>

                <RightButton>
                    Existing Inventory
                </RightButton>

            </ButtonGroup>


            <DownArrow src="/images/down-arrow.svg"/>

        </ActionButtons>    

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
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`

const ContentText = styled.div`
    padding-top:14vh;
    text-align:center;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:20px;
`

const LeftButton = styled.div`
    font-size:13px;
    text-transform:uppercase;
    opacity:0.85;
    background:rgba(23,26,33,0.8);
    height:40px;
    width:250px;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:54px;
    cursor:pointer;
    margin:10px;

`
//inheriting css of the left button
const RightButton = styled(LeftButton)`

`

const DownArrow = styled.img`
    margin-top:25px;
    height:40px;
    overflow-x:hidden;
    animation: downArrowAnim infinite 1.6s;
`

const ActionButtons = styled.div`

`