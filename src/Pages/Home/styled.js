import styled from "styled-components";

export const ContainerHOME = styled.div`
    min-height: 75vh;
    max-width: 1300px;
    margin: 0 auto;
    flex-direction: column;
    padding: 4em;

    h1{
        font-size: 2.5em;
        margin-bottom: 0.5em;

        span{
            color: orange;
            padding: 0 .2em;
            background-color: #000;
        }
    }

    p{
        margin-bottom: 1.5em;
        color: #7b7b7b;
    }

    img{
        width: 350px;
        margin: 2em 0;
    }
`;

