
import styled from 'styled-components';
import { ShoppingCartTwoTone } from '@material-ui/icons';
import { SearchOutlined } from '@material-ui/icons';

export const Container = styled.div`
    min-height:55px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    transition: .5s;
    *{
        color:#fff;
        font-family: 'Times New Roman', sans-serif;
    }

    #logo{
        height:20px;
        margin-top:7%;
    }
    
    #shop-left{
        
        font-weight:600;
        display:flex;
        width:15vw;
        justify-content:space-between;
        text-align:center;
        align-items:center;
    };

    &:hover *{
        color:#000;
    };
    &:hover{
        background:#ffffff;
    }

   
`

export const Menu = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:600;
        padding:0 10px;
        flex-wrap:no-wrap;
        font-family: 'Times New Roman', sans-serif;
    }
    @media(max-width:772px){
        display:none;
    }
`


export const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
    font-weight:600;
    margin-right:10px;
    flex-wrap:no-wrap;
    }
    padding:10px;
`

export const SearchLinkIcon = styled(SearchOutlined)`
    margin-right:15px;
`

export const CartLinkIcon = styled(ShoppingCartTwoTone)`
    margin-right:15px;
`