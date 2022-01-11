import styled from "styled-components";

export const LguWrapper = styled.div`
    min-height: 100vh;
    padding: 100px 20px;

    @media screen and (max-width: 900px){
        display: none;
    }
`;

export const LguText = styled.div`
    text-align: center;
    color: #353535;
    width: 70%;
    margin: auto;
    
    h3{
        font-size: 24px;
        font-family: 'Pacifico', sans-serif;
        font-weight: 500;
    }

    h1{
        font-size: 55px;
        color: #FF3D3D;
    }

    h2{
        font-size: 20px;
        font-weight: 400;
    }

`;

export const LguCouncil = styled.div`
    margin-top: 50px;
`;

export const MayorInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const TopMayor = styled.div`
    padding: 20px 0;
    width: 50%;
    margin: auto;
    text-align: center;

    img{
        width: 40%;
    }

    h2{
        color: #232323;
        font-size: 22px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 10px;
    }

    h3{
        color: #737373;
        font-size: 15px;
        font-weight: 500;
        padding: 3px 0;
    }
`;

export const CouncilInfo = styled.div`
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
`;

export const BottomCouncil = styled.div`
    width: 25%;
    margin:auto;
    padding: 30px 65px;
    text-align: center;
    
    img{
        width: 100%;
    }

    h2{
        color: #232323;
        font-size: 20px;
        margin-top: 10px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    h3{
        color: #737373;
        font-size: 15px;
        font-weight: 500;
        padding: 3px 0;
    }
`;