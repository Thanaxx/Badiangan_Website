import styled from "styled-components";

export const TourismWrap = styled.div`
    min-height: 100vh;

    @media screen and (max-width: 900px){
        padding: 0 10px;
    }
`;

export const TourismMain = styled.div`
    width: 100%;
    margin: auto;
`;

export const MainText = styled.div`
    text-align: center;
    padding: 40px 0;
    width: 80%;
    margin: auto;

    @media screen and (max-width: 900px){
        width: 100%;
    }

    h3{
        font-family: 'Pacifico', sans-serif;
        font-weight: 300;
        font-size: 20px;
    }

    h1{
        font-size: 45px;
        color: #FF3D3D;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 900px){
            font-size: 35px;
        }
    }

    p{
        font-size: 18px;
        font-weight: 400;
        color: #232323;
        padding: 5px 0;

        @media screen and (max-width: 900px){
            font-size: 16px;
        }
    }
`;

export const MainImages = styled.div`
    --webkit-column-count: 3;
    --moz-column-count: 3;
    column-count: 3;
    --webkit-column-width: 33%;
    --moz-column-width: 33%;
    column-width: 33%;
    padding: 0 12px;

    @media (max-width: 991px){
        --webkit-column-count: 2;
        --moz-column-count: 2;
        column-count: 2;
    }

    @media (max-width: 600px){
        --webkit-column-count: 1;
        --moz-column-count: 1;
        column-count: 1;
        --webkit-column-width: 100%;
        --moz-column-width: 100%;
        column-width: 100%;
    }

    .team{
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
        cursor: pointer;
        
        @media screen and (max-width:900px){
            padding: 10px 0;
        }
    }

    .theImage{
        position: relative;
    }

    .theImage img{
        width: 100%;
        z-index: 10;
        transition: 0.9s;
    }

    .overlay-text {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        bottom: 4px;
        left: 0;
        top: 0;
        right: 0;
        text-align: center;
        background-color: rgba(134, 134, 134, 0.54);
        width: 100%;
        padding: 15px 5px;
        color: white;
    }

    .text h1{
        font-size: 25px;
        padding-bottom: 10px;
    }

    .text p{
        font-size: 15px;
    }

    .text{
        position: absolute;
        margin: auto;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
    }

    .team:hover .overlay-text{
        opacity: 1; 
    }
`;

// Modal

export const ModalImage = styled.div`
    background-color: #F8F8F8;
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    z-index: 999;
    padding: 30px;

    @media screen and (max-width: 991px){
        padding: 30px 10px;
    }
    
`;

export const SpotClose = styled.div`
    position: fixed;
    top: 0;
    right: 35px;
    margin-bottom: 30px;

    
    .closeIcon{
        color: #000000;
        font-size: 35px;
        cursor: pointer;
    }
`;

export const SpotBody = styled.div`
    display: flex;
    margin: 20px;
    position: fixed;
    top: 20px;
    left: 0;

    @media screen and (max-width: 900px){
        flex-direction: column-reverse;
    }

    .SpotDetails{
        flex: 2;
        color: #232323;
        padding: 0 30px;

        h4{
            margin-top: 25px;
            font-family: 'Pacifico', sans-serif;
            font-weight: 500;
            font-size: 20px;
        }

        h2{
            color: #FF3D3D;
            font-size: 35px;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding:7px 0;
        }

        h3{
            color: #505050;
            font-size: 17px;
            font-weight: 400;
        }
    }

    .SpotImage{
        flex: 1;

        img{
            height: 500px;
            width: 500px;

            @media screen and (max-width: 991px){
                width: 100%;
                height: auto;
            }
        }
    }
`;

