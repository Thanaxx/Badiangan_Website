import styled from "styled-components";

export const NewsWrap = styled.div`
    padding: 0 50px;

    @media screen and (max-width: 900px){
        padding: 10px 0;
    }
`;

export const NewsSearch = styled.div`

    h2{
        text-align: center;
        color: #FF3D3D;
        font-size: 45px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 20px;

        @media screen and (max-width: 900px){
            font-size: 35px;
        }
    }

    .searchBox{
        background-color: transparent;
        margin: auto;
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 10px;
        border-radius: 5px;
        border: 1px solid #ACACAC;


        @media screen and (max-width: 900px){
            width: 90%;
        }

        input{
            width: 100%;
            font-size: 16px;
            border: none;
            outline: none;
            font-weight: 400;
            background-color: transparent;

            @media screen and (max-width: 900px){
                font-size: 14px;
            }
        }

        .search{
            color: #FF3D3D;
            font-size: 30px;
            padding-top: 4px;

            @media screen and (max-width: 900px){
                font-size: 25px;
            }
        }
    }
`;

export const NewsBody = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin: 40px 0;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
`;

export const ViewMoreBtn = styled.div`
    text-align: center;
    margin: 30px 0;

    button{
        border: none;
        outline: none;
        text-decoration: underline;
        cursor: pointer;
        background-color: transparent;
        font-size: 17px;
    }
`;

//
export const NewsBox = styled.div`
    width: 45%;
    align-items: center;
    padding: 20px;
    margin: auto;
    cursor: pointer;

    @media screen and (max-width: 900px){
        width: 100%;
    }

    .Allnews{
        
    }

    .NewsText{
        color: white;
        color: black;

        h3{
            font-size: 21px;
            padding: 7px 0;
            color: #232323;
        }
        p{
            font-size: 15px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            color: #666666;
        }
    }

    img{
        width: 100%;
        height: 300px;
        border-radius: 5px;
    }

    button{
        margin-top: 20px;
        background-color: #FF3D3D;
        width: 30%;
        padding: 10px 0;
        border: none;
        outline: none;
        border-radius: 5px;
        cursor: pointer;
        color: white;

        :hover{
            background: linear-gradient(268.87deg, #232323 -26.27%, #FF3D3D 60.7%);
            transition: 0.5s ease-in;
        }
    }
`;