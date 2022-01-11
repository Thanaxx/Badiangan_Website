import styled from "styled-components";

export const FooterWrap = styled.div`
    padding: 30px 20px;

    hr{
        color: #6A6A6A;
        margin: 20px 0;
    }
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;

    @media screen and (max-width:900px){
        flex-direction: column;
    }
`;

export const LinkTitle = styled.div`
    flex: 1;
    margin: auto;
    text-align: center;

    @media screen and (max-width:900px){
        text-align: left;
        margin: 0;
        margin-bottom: 10px;
    }

    h2{
        color: #535353;
        font-size: 16px;
        font-weight: 500;
        padding-bottom: 5px;
    }

    h3{
        color: #3E3E3E;
        font-size: 14px;
        font-weight: 400;
    }
`;

export const Linknames = styled.div`
    flex: 2;
    display: flex;

    @media screen and (max-width:900px){
        flex-direction: column;
    }
`;

export const LinkItems = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;

    @media screen and (max-width:900px){
        text-align: left;
        padding: 7px 0;
    }
    

    a{
        text-decoration: none;
        font-size: 15px;
        color: #6A6A6A;
    }

    h3{
        margin-bottom: 4px;
        color: #545454;
        font-weight: 500;
        font-size: 16px;
    }
`;

export const FooterIcons = styled.div`
    text-align: center;
    padding: 20px 0;
`;

export const Socmed = styled.div`
    img{
        padding: 0 20px;
        width: 65px;
        cursor: pointer;
    }
`;

export const FooterRights = styled.div`
    h2{
        font-size: 12px;
        padding: 5px 0;
        color: #535353;
        font-weight: 400;
    }
`;



