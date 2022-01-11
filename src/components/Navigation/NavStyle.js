import styled from "styled-components";
import {Link} from 'react-router-dom';

export const NavContainer = styled.div`
    background-color: white;
    min-height: auto;
    width: 100%;
    position: sticky;
    top: 0;
    padding: 15px 40px;
    z-index: 12;

    @media screen and (max-width: 800px){
        padding: 10px;
    }

`;

export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLogo = styled.div`
    align-items: center;
    padding: 5px 0 0 10px;
    cursor: pointer;
    
    img{
        height: 40px;
        width: 180px;
    }
`;


export const NavMenu = styled.div`

    ul{
        align-items: center;
        justify-content: center;
        display: flex;
    }

    li{
        list-style-type: none;
    }

    

    @media screen and (max-width: 1000px){

        .NavOpen{
            background-color: white;
            height: 100vh;
            width: 100%;
            position: fixed;
            top: 60px;
            right: 0;
            z-index: 1;
            display: block;
            opacity: 1;
            transition: 0.5s;
            padding: 20px 0;
        }

        .NavClose{
            width: 100%;
            height: 90vh;
            position: absolute;
            top: 80px;
            right: 0;
            opacity: 1;
            transition: all 0.5s ease;
            display: none;
        }
    }

    .dropBlock{
        @media screen and (min-width: 900px){
            display: none;
        }
    }
 
`;

export const NavLink = styled(Link)`
    padding: 25px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    color: #3D3D3D;
    text-decoration: none;

    @media screen and (max-width: 1000px){
        display: table;
        width: 100%;
        text-align: left;
        font-size: 15px;
        padding: 12px 15px;
        border-bottom: 1px solid #DEDEDE;
    }

    :hover{
        color: #FF3D3D;
    }

    @media screen and (max-width: 900px){
        :hover{
            background-color: #FF3D3D;
            color: white;
        }
    }
`;

// Burger menu
export const NavBurgerMenu = styled.div`
    display: none;

    @media screen and (max-width: 1000px){
        display: block;
        font-size: 35px;
        font-weight: 500;
        cursor: pointer;
        color: #353535;
        position: absolute;
        top: 18px;
        right: 18px;
    }
`;