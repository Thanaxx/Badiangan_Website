import styled from "styled-components";

export const ContWrap = styled.div`
    padding: 15px 0;
`;

export const ContTitle = styled.div`
    text-align: center;
    color: #232323;
    line-height: 50px;

    @media screen and (max-width: 900px){
        line-height: 38px;
    }

    h4{
        font-family: 'Pacifico', cursive;
        color: #FF3D3D;
        font-size: 20px;
        font-weight: lighter;
    }

    h1{
        font-size: 45px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 900px){
            font-size: 35px;
        }
    }

    p{
        font-size: 20px;

        @media screen and (max-width: 900px){
            font-size: 18px;
        }
    }
`;

export const ContDetails = styled.div`
    display: flex;
    margin-bottom: 100px;
    color: #4E6E79;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const ContBox = styled.div`
    margin: auto;
    text-align: center;
    line-height: 15px;
    padding: 30px 0;

    @media screen and (max-width:900px){
        margin-bottom: 3px;
        padding: 12px 0;
    }

    @media screen and (max-width: 768px){
        margin-bottom: 15px;
    }

    img{
        width: 80px;

        @media screen and (max-width:900px){
            width: 60px;
        }
    }

    h1{
        font-size: 18px;
        color: #232323;
        margin-bottom: 10px;
        font-weight: 500;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @media screen and (max-width:900px){
            font-size: 16px;
        }
    }

    p{
        font-size: 16px;
        color: #7E7E7E;
        padding: 4px 0;
    }
`;

export const ContMap = styled.div`

`;