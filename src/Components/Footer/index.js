import "../../App.css"

import { FooterContainer } from "./styled";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

function Footer() {
    return (
        <FooterContainer className="centralizer">
            <ul>
                <li><FaGithub/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p><span>Todos os direitos reservados.</span> &copy; 2022</p>
        </FooterContainer>
    )
}

export default Footer