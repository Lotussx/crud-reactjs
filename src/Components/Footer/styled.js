import styled from "styled-components"; 

export const FooterContainer = styled.footer`
    width: 100%;
    height: 12vh;
    background-color: black;
    color: white;
    font-size: 18px;
    flex-direction: column;
    padding-top: 5px;

    ul{
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;

        li{
            margin: 0 0.5em;
            cursor: pointer;
            transition: 0.3s;
        }
        li:hover{
            color: orange;
        }
    }
    
    p{
        font-size: 15px;
    }

`;
