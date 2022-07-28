import React from "react";
import { useState, useEffect } from "react"
import { FormContainerStyle } from "./styled"

import Input from "./Input"
import Select from "./Select";
import SubmitButton from "./SubmitButton";

function FormContainer({ btnText }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

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
                options={categories}
            />

            <SubmitButton
                text={btnText}
            />
        </FormContainerStyle>
    )
}

export default FormContainer