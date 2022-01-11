import styled from "styled-components";

export const NewsWrap = styled.div`
    min-height: 100vh;
    padding: 120px 20px;

    @media screen and (max-width: 900px){
        padding: 100px 10px;
    }
`;

export const NewsTop = styled.div`
    text-align: center;
    color: #353535;
    width: 75%;
    margin: auto;

    @media screen and (max-width: 900px){
        width: 100%;
    }

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
        margin-top: 25px;
        background: linear-gradient(268.87deg, #232323 -26.27%, #FF3D3D 60.7%);
        border: none;
        outline: none;
        color: white;
        font-weight: 400;
        border-radius: 5px;
        cursor: pointer;
    }
`;

// newsmain area
export const NewsNames = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin: 40px 0;
`;

// ------
export const NewsItem = styled.div`
    width: 32%;
    margin: auto;
    padding: 20px 10px;
    cursor: pointer;
    
    @media screen and (max-width: 900px){
        width: 50%;
    }

    @media screen and (max-width: 600px){
        width: 100%;
    }

    .AllNews{
        position: relative;

        :hover{
            transform: scale(1.1);
            transition: 0.5s ease-in-out;
        }

        img{
            width: 100%;
            border-radius: 5px;
        }
    }

    .NewsText{
        color: white;
        position: absolute;
        top: 70%;
        left: 5px;
        padding: 10px 5px;

        @media screen and (max-width: 1200px){
                    top: 50%;
                }

                @media screen and (max-width: 900px){
                    top: 55%;
                }

                @media screen and (max-width: 600px){
                    top: 70%;
                }

            h3{
                font-size: 14px;
                padding-bottom: 4px;
                font-weight: 500;

                @media screen and (max-width: 900px){
                    font-size: 14px;
                }

                @media screen and (max-width: 600px){
                    font-size: 14px;
                }
            }

            p{
                font-size: 13px;
            }
        }
`;
