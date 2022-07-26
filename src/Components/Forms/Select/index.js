import React from "react";
import { FormContent } from "./styled"

function Select({text, name, options, handleOncChange, value }) {
    return (
        <FormContent>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </FormContent>
    )
}

export default Select