import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 17vh;
    background-color: black;
    justify-content: space-between !important;

    div{
        border: 1px solid white;
        width: 70px;
        height: 70px;
        margin-left: 80px;
        border-radius: 50%;
        background-color: white;
    }   
    nav{
        width: 30%;
        height: 30px;
        margin-right: 20px;
        font-size: 14px;

        ul li{
            display: inline;
            margin-right: 1.5em;
            
            a{  
                transition: 0.3s;
                text-decoration: none;
                color: white;

            }
            a:hover{
                color: orange;
            }
        }  
    }
`;
