import React from "react";
import "../../App.css"
import { ContainerProjetos } from "./styled";

import FormProject from "../../Components/Forms"

function NewProjects() {
    return (
        <ContainerProjetos>
            <div className="container-projeto-content">
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
            <FormProject btnText="Criar Projeto"/>
            </div>
        </ContainerProjetos>
    )   
}

export default NewProjects