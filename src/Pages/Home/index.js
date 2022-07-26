import React from "react";
import "../../App.css"
import { ContainerHOME } from "./styled";
import savings from "../../Images/savings.svg"
import LinkButton from "../../Components/LinkButton";

function HomePage() {
    return (
        <ContainerHOME className="centralizer">
            <h1>Bem Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/NovoProjeto" text="Criar Projeto"/>
            <img src={savings} alt="Costs"></img>
        </ContainerHOME>
    )
}

export default HomePage