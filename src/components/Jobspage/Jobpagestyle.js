import styled from "styled-components";

export const JobsWrap = styled.div`
    min-height: 100vh;
    padding: 10px 0;

    .jobheader{
        text-align: center;

        h3{
            font-family: 'Pacifico', sans-serif;
            font-size: 20px;
            color: #FF3D3D;
            font-weight: 500;
        }

        h2{
            font-size: 45px;
            color: #232323;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            @media screen and (max-width: 900px){
                font-size: 35px;
            }
        }
    }
`;

export const JobMain = styled.div`
    width: 90%;
    margin: auto;
`;

export const JobsName = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 15px 0;
`;

export const JobBox = styled.div`
    width: 40%;
    margin: 20px auto;
    padding: 30px;
    border-radius: 10px;
    color: #353535;
    font-weight: 400;
    background: rgba(211, 211, 211, 0.31);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 768px){
        width: 90%;
    }

    h1{
        font-weight: 600;
        color: #FF3D3D;
        margin-bottom: 1px;

        @media screen and (max-width: 450px){
            font-size: 25px;
        }
    }

    p{
        font-size: 15px;
        
        @media screen and (max-width: 450px){
            font-size: 14px;
        }
    }

    h3{
        margin: 15px 0;
        font-weight: 500;

        @media screen and (max-width: 450px){
            font-size: 18px;
        }
    }

    h2{
        margin: 10px 0;
        font-size: 18px;
        color: #FF3D3D;
        font-weight: 500;

        @media screen and (max-width: 450px){
            font-size: 18px;
        }
    }

    ul{
        padding: 10px 15px;
        line-height: 18px;

        @media screen and (max-width: 480px){
            line-height: 15px;
        }

        @media screen and (max-width: 900px){
            line-height: 17px;
        }

        h4{
            font-size: 15px;
            font-weight: 400;

            @media screen and (max-width: 450px){
                font-size: 14px;
            }
        }
    }

    .applyBtn{
        text-align: center;
    }

    button{
        background-color: #FF3D3D;
        color: white;
        padding: 13px 15px;
        border: none;
        outline: none;
        border-radius: 4px;
        cursor: pointer;
        margin: 10px 0;
        margin-top: 20px;
        width: 65%;

        @media screen and (max-width: 450px){
            width: 90%;
        }
    }
`;