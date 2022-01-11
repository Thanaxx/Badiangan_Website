import styled from "styled-components";

export const MayorWrap = styled.div`
    min-height: 100vh;
    padding: 30px 50px;

    @media screen and (max-width: 900px){
        flex-direction: column;
        padding: 30px 10px;
    }
`

export const MayorIntro = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
`

export const MayorImage = styled.div`
    text-align: center;

    img{
        @media screen and (max-width: 900px){
            width: 70%;
        }
    }
`

export const MayorProfile = styled.div`
    text-align: center;

    h2{
        font-size: 45px;
        color: #FF3D3D;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 900px){
            font-size: 30px;
            margin-top: 10px;
        }
    }

    h3{
        font-size: 25px;
        font-weight: 500;
        color: #353535;

        @media screen and (max-width: 900px){
            font-size: 18px;
        }
    }
`

export const MayorSocIcons = styled.div`
    img{
        width: 35px;
        margin: 15px 10px;

        @media screen and (max-width: 900px){
            width: 30px;
        }
    }
`

export const MayorDetails = styled.div`
    padding: 30px;

    @media screen and (max-width: 900px){
        padding: 10px;
    }

    .mayorSection{
        margin: 35px 0;
    }

    h6{
        font-size: 20px;
        padding: 7px 0;
        font-weight: 500;
        font-family: 'Pacifico', sans-serif;
    }

    h2{
        font-size: 30px;
        padding: 7px 0;
        color: #FF3D3D;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 900px){
            font-size: 25px;
        }
    }

    h4{
        font-size: 18px;
        padding: 7px 0;
        font-weight: 400;

        @media screen and (max-width: 900px){
            font-size: 16px;
        }
    }
`