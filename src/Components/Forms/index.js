import React from "react";
import { FormContainerStyle } from "./styled"

import Input from "./Input"
import Select from "./Select";
import SubmitButton from "./SubmitButton";

function formContainer({btnText}) {
    return (
        <FormContainerStyle>
            <Input 
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input 
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select
                name="category_id"
                text="Selecione a categoria"
            />

            <SubmitButton 
                 text={btnText}
            />
        </FormContainerStyle>
    )
}

export default formContainer