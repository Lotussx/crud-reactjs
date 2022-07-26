import React from "react"
import { Link } from "react-router-dom"
import { LinkButtonStyle } from "./styled";

function LinkButton({ to, text }) {
    return (

        <LinkButtonStyle>
            <Link to={to}>
                {text}
            </Link>
        </LinkButtonStyle>
    )
}

export default LinkButton