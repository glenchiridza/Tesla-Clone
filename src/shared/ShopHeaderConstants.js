
import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';

export const Container = styled.div`
    min-height:65px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    z-index;1;
   
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