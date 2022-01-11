import styled from "styled-components";

export const NewsModalBox = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0px;
    left: 0;
    background-color: white;
    z-index: 999;

    @media screen and (max-width: 900px){
        padding: 0 10px;
    }
`;

export const NewsClose = styled.div`
    padding: 15px 30px;
    position: absolute;
    top: 10px;
    right: 10px;

    @media screen and (max-width:900px){
        padding: 15px;
    }

    .closenews{
        font-size: 33px;
        font-weight: bolder;
        cursor: pointer;
        background-color: rgba(196, 196, 196, 0.2);
        padding: 3px;
    }
`
export const NewsText = styled.div`

`

export const TopHeadline = styled.div`
    display: flex;
    flex-direction: column;
`

export const LeftImage = styled.div`

    img{
        width: 1348px;
        height: 420px;

        @media screen and (max-width:900px){
            width: 100%;
            height: 250px;
        }
    }
`

export const RightDesc = styled.div`
    margin: 10px 150px;

    @media screen and (max-width:900px){
        margin: 10px;
    }

    h1{
        font-size: 35px;
        margin-bottom: 8px;

        @media screen and (max-width:900px){
            font-size: 25px;
        }
    }

    p{
        font-style: italic;
        font-size: 15px;
        padding: 2px;

        @media screen and (max-width:900px){
            font-size: 13px;
        }
    }

    h3{
        font-size: 18px;
        font-weight: 400;
        text-align: justify;
        margin-top: 17px;

        @media screen and (max-width:900px){
            font-size: 16px;
        }
    }
`

export const BottomBody = styled.div`
    margin: 10px 150px 100px 150px;

    @media screen and (max-width:900px){
        margin: 10px 10px 100px 10px;
    }

    h3{
        font-size: 18px;
        font-weight: 400;
        text-align: justify;

        @media screen and (max-width:900px){
            font-size: 16px;
        }
    }
`