import React from "react";
import { FormContent } from "./styled"

function Input({ type, text, name, placeholder, handleOncChange, value }) {
    return (
        <FormContent>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOncChange}
            />
        </FormContent>
    )
}

export default Input