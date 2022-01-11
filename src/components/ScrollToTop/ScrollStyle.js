import styled from "styled-components";

export const ScrollWrap = styled.div`
    background-color: #FF3D3D;
    padding: 8px 8px 0 8px;
    color: white;
    position: fixed;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    z-index: 999;
    font-size: 30px;
    border-radius: 5px;

    .arrow{
        animation: scrollTop 0.5s alternate ease infinite;
        font-weight: bolder;

        @keyframes scrollTop{
            from{
                transform: translateY(5px);
            } 
            to{
                transform: translateY(-3px);
            }
        }
    }
`;