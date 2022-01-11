import styled from "styled-components";

export const SlideContainer = styled.div`
    min-height: auto;
`;

export const SlideMain = styled.div`
    width: 100%;

    @media screen and (max-width: 900px){
        padding: 0 10px;
    }
`;

export const SlideNum = styled.div`
    color: white;
    text-align: center;
    margin: auto;
    position: relative;

    .slidename{
        width: 100%;

        img{
            background-position: center;
            background-size: cover;
            width: 100%;
            height: auto;

            @media screen and (max-width: 900px){
                height: 65vh;
            }

            @media screen and (max-width: 411px){
                height: 65vh;
            }
        }
    }

    .textSlide{
        position: absolute;
        top: 0;
        left: 0;
        padding: 12rem;
        width: 100%;
        margin: auto;
        

        @media screen and (max-width: 900px){
            padding: 9.5rem 3rem;
        }

        @media screen and (max-width: 411px){
            padding: 12.5rem 3rem;
        }


        h2{
            font-size: 30px;
            font-weight: 500;

            @media screen and (max-width: 900px){
                font-size: 20px;
            }
        }

        hr{
            margin: 10px 0;
            color: rgba(82, 82, 82, 0.23);
        }

        p{
            font-size: 18px;

            @media screen and (max-width: 900px){
                font-size: 15px;
                font-weight: 300;
            }
        }
    }

    .stars{
        color: #FFE70E;
        width: 100%;
        text-align: center;
    }

    .starname{
        margin: 10px;
        font-size: 20px;
    }

`;