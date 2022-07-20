import styled from "styled-components";

export const AreaHeader = styled.div`
    height: 13vh;
    background-image: linear-gradient(to right, #fe5d45, #370d44);

    .container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .containerIMG{
            max-height: 65px;
            max-width: 65px;
            background-color: white;
            border-radius: 50%;
            margin-left: 20px;

            img{
                height: 100%;
                width: 100%;
            }
        }

        .containerMENU{
            margin-right: 20px;

            ul{
                list-style: none;
                display: flex;
                justify-content: left;

                li{ 
                    margin: 0 5px;
                    padding-right: 10px;
                    padding-left: 10px;
                    color: white;
                    text-shadow: 1px 1px 1px black;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 30px;
                    text-decoration: none;
                    border-radius: 15px;
                }

                a{
                    text-decoration: none;
                }

                li:hover{
                    cursor: pointer;
                    background-color: white;
                    transition: 0.5s;
                    color: #370d44;
                    text-shadow: none;
                }
            }
        }
    }


`;