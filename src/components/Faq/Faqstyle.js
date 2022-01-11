import styled from "styled-components"

export const FaqWrap = styled.div`
    padding: 30px 0;

    @media screen and (max-width: 900px){
        padding: 30px 10px;
    }

`;

export const WrapText = styled.div`
    margin-bottom: 30px;
    text-align: center;
    width: 80%;
    margin: auto;
    
    @media screen and (max-width: 900px){
        width: 100%;
    }

    h3{
        font-size: 20px;
        font-family: 'Pacifico', sans-serif;
        color: #FF3D3D;
        font-weight: 400;
    }

    h1{
        font-size: 45px;
        color: #353535;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 900px){
            font-size: 35px;
        }
    }

    p{
        text-align: left;
        padding: 30px 5px;
        text-align: left;
    }
`;

export const WrapQuestions = styled.div`
    
`;

export const QuestionData = styled.div`
    width: 80%;
    margin: auto;

    @media screen and (max-width: 768px){
        width: 98%;
    }
`;


export const WrapQuest = styled.div`
    transition: 0.4s;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    background-color: #E1E1E1;

    @media screen and (max-width: 900px){
        margin-bottom: 15px;
    }

    h3{
        color: #353535;
        font-size: 16px;
        font-weight: 400;
        color: #353535;

        @media screen and (max-width: 900px){
            font-size: 14px;
        }
    }

    span{
        color: #FF3D3D;
    }

`;

export const Dropdown = styled.div`
    margin-bottom: 30px;
    transition: 0.1s ease-in-out;

    p{
        font-weight: 400;
        margin-bottom: 25px;
        padding: 0px 5px;
        font-size: 16px;

        @media screen and (max-width: 900px){
            font-size: 14px;
        }
    }
`;