import styled from "styled-components";

export const ProfileWrap = styled.div`
    min-height: 100vh;
    padding: 30px 50px;

    @media screen and (max-width: 900px){
        padding: 30px 10px;
    }
`;

export const ProfileImg = styled.div`
    text-align: center;
    
    img{
        border-radius: 6px;
        width: 100%;
        height: 500px;

        @media screen and (max-width: 900px){
            width: 100%;
            height: auto;
        }
    }
`;

export const ProfileInfo = styled.div`
    padding: 30px;

    @media screen and (max-width: 900px){
        padding: 30px 0;
    }

    h2{
        font-size: 27px;
        padding: 10px 0;
        color: #FF3D3D;
        font-weight: 500;
        padding: 10px;
        text-align: center;

        @media screen and (max-width: 900px){
            font-size: 24px;
        }
    }

    h3{ 
        font-size: 17px;
        padding: 15px 0;
        font-weight: 400;

        @media screen and (max-width: 900px){
            font-size: 16px;
            font-weight: 400;
        }
    }

    .details{
        margin: 35px 0;
    }
`;