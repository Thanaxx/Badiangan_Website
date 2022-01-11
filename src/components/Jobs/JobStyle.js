import styled from "styled-components";

export const JobWrapper = styled.div`
    min-height: 100vh;
    background-color: rgba(196, 196, 196, 0.33);
    /* clip-path: polygon(100% 10%, 100% 90%, 0 100%, 0 0); */
    clip-path: polygon(100% 10%, 100% 90%, 0 100%, 0 0);
    padding: 0 20px;

    @media screen and (max-width: 900px){
        padding: 0 10px;
        clip-path: polygon(100% 2%, 100% 98%, 0 100%, 0 0);
    }
    
    @media screen and (max-width: 411px){
        clip-path: polygon(100% 2%, 100% 98%, 0 100%, 0 0);
    }

`;

export const JobContainer = styled.div`
    display: flex;
    min-height: 100vh;
    padding: 30px 0;

    @media screen and (max-width: 900px){
        flex-direction: column-reverse;
    }
`;

export const JobImage = styled.div`
    flex: 1;
    margin: auto;
    padding: 10px;

    img{
        width: 100%;
    }
`;

export const JobText = styled.div`
    flex: 1;
    padding: 10px;
    margin: auto;
    color: #353535;

    h3{
        font-size: 24px;
        font-family: 'Pacifico', sans-serif;
        font-weight: lighter;

        @media screen and (max-width: 900px){
            font-size: 18px;
        }
    }

    h1{
        font-size: 55px;
        color: #FF3D3D;
        padding: 10px 0;

        @media screen and (max-width: 900px){
            font-size: 40px;
        }
    }

    h2{
        font-size: 20px;
        font-weight: 400;

        @media screen and (max-width: 900px){
            font-size: 16px;
        }
    }

    button{
        padding: 13px 30px;
        font-size: 16px;
        margin-top: 35px;
        background: linear-gradient(268.87deg, #232323 -26.27%, #FF3D3D 60.7%);
        border: none;
        outline: none;
        color: white;
        font-weight: 400;
        border-radius: 10px;
        cursor: pointer;
    }
`;
