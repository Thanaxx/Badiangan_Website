import styled from "styled-components";
import ContBg from "../../../src/images/contact.png"

export const ContactContainer = styled.div`
    min-height: 100vh;

    @media screen and (max-width: 411px){
        min-height: auto;
    }
`;

export const ContactWrap = styled.div`
    background-image: url(${ContBg});
    background-position: center;
    background-size: cover;
    height: 600px;
    width: 100%;
    display: flex;

    @media screen and (max-width: 900px){
        flex-direction: column;
        padding: 0 10px;
    }

`;

export const ContText= styled.div`
    margin: auto;
    color: white;
    width: 70%;

    @media screen and (max-width: 900px){
        margin: 0;
        width: 100%;
        padding-top: 150px;
    }


    h3{
        font-size: 24px;
        font-weight: 300;
        font-family: 'Pacifico', sans-serif;

        @media screen and (max-width: 900px){
            font-size: 18px;
        }
    }

    h1{
        font-size: 55px;
        padding: 10px 0;

        @media screen and (max-width: 900px){
            font-size: 40px;
        }

        @media screen and (max-width: 450px){
            font-size: 35px;
        }
    }

    h2{
        font-size: 20px;
        font-weight: 300;

        @media screen and (max-width: 900px){
            font-size: 16px;
        }
    }

`;

export const ContButton = styled.div`
    margin: auto;

    button{
        padding: 13px 30px;
        font-size: 16px;
        background: linear-gradient(268.87deg, #232323 -26.27%, #FF3D3D 60.7%);
        border: none;
        outline: none;
        color: white;
        font-weight: 400;
        border-radius: 10px;
        cursor: pointer;
    }

    @media screen and (max-width: 900px){
        margin: 20px  0;
    }
`;