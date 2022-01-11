import styled from "styled-components";

export const HeroWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 85vh;
    padding: 0px 30px;

    @media screen and (max-width: 900px){
        flex-direction: column;
        padding: 10px;
    }
    
`;

export const HeroDetails = styled.div`
    flex: 1;
    padding: 0 5px;
    line-height: 40px;

    .label{
        font-size: 24px;
        padding-left: 6px;
        font-weight: 500;
        color: #3D3D3D;

        @media screen and (max-width: 900px){
            font-size: 18px;
        }

        @media screen and (max-width: 411px){
            font-size: 16px;
        }
    }

    .title{
        font-size: clamp(5rem, 10vw, 6rem);
        line-height: 90px;
        padding: 18px 0px;
        color: #FF3D3D;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-weight: 600;
        
        @media screen and (max-width: 1150px){
            font-size: 4.5rem;
            line-height: 70px;
            padding: 15px 0;
        }

        @media screen and (max-width: 411px){
            font-size: 3.6rem;
            line-height: 60px;
        }

        @media screen and (max-width: 411px){
            font-size: 3rem;
        }

        @media screen and (max-width: 900px){
            padding: 14px 0;
        }
    }

    p{
        font-size: 20px;
        color: #3E3E3E;
        line-height: 30px;
        padding-left: 6px;

        @media screen and (max-width: 900px){
            font-size: 18px;
            line-height: 20px;
        }

        @media screen and (max-width: 411px){
            font-size: 16px;
        }
    }

    button{
        padding: 13px 30px;
        font-size: 16px;
        margin-top: 25px;
        background: linear-gradient(268.87deg, #232323 -26.27%, #FF3D3D 60.7%);
        border: none;
        outline: none;
        color: white;
        font-weight: 400;
        border-radius: 5px;
        margin-left: 6px;
        cursor: pointer;
    }
`;

export const HeroImage = styled.div`
    flex: 1;

    img{
        width: 100%;
        height: 100%;
        background-position: center;

        @media screen and (max-width: 900px){
            padding: 20px 0;
        }
    }
`;


// Hero Text
export const HeroText = styled.div`
    padding: 18vh 0;

    @media screen and (max-width: 900px){
        padding: 10vh 10px;
    }
`;

export const TextData = styled.div`
    margin: auto;
    text-align: center;
    width: 85%;

    @media screen and (max-width: 900px){
        width: 100%;
    }

    p{
        font-size: 20px;
        color: #232323;

        @media screen and (max-width: 900px){
            font-size: 16px;
        }
    }

    span{
        font-size: 55px;
        color: #FF3D3D;
        font-weight: 600;

        @media screen and (max-width: 900px){
            font-size: 40px;
        }
    }
`;