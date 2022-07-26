import React from "react";
import { ButtonStyle } from "./styled"

function SubmitButton({ text }) {
    return (
        <div>
            <ButtonStyle>{text}</ButtonStyle>
        </div>
    )
}

export default SubmitButton