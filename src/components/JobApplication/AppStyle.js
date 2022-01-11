import styled from "styled-components";

export const AppWrapper = styled.div`
    min-height: 70vh;
    padding: 30px;

    @media screen and (max-width: 900px){
        padding: 20px 10px;
    }

    h1{
        font-size: 45px;
        text-align: center;
        color: #FF3D3D;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const ContactForm = styled.div`
    width: 60%;
    margin: auto;
    margin-top: 5px;

    @media screen and (max-width: 900px){
        width: 100%;
    }

    form{
        h3{
            font-size: 20px;
            font-weight: 600;
            padding: 10px 0;
        }

        .fullname{
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: 450px){
                flex-direction: column;
            }
            
            .fname{
                width: 100%;
            }

            .lname{
                width: 100%;
                margin-left: 15px;

                @media screen and (max-width: 450px){
                    margin-left: 0;
                }
            }
        }

        input{
            width: 100%;
            padding: 7px 10px;
            margin-bottom: 10px;
            margin-top: 5px;
            border-radius: 7px;
            background-color: transparent;
            border: 1px solid #9F9F9F;
            outline: none;
        }

        label{
            font-size: 14px;
        }

        .uploadFile{
            border: none;
            width: 250px;
        }

        .submitApp{
            width: 250px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: auto;
            margin-top: 50px;

            input{
                background-color: #FF3D3D;
                cursor: pointer;
                padding: 8px 0;
                color: white;
                font-size: 16px;
                border: none;
                outline: none;
            }
        }
    }
`;