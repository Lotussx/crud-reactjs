import { Link } from "react-router-dom";
import { HeaderContainer } from "./styled";

function Header() {
    return (
        <HeaderContainer className="centralizer">
            <div>
            </div>
            <nav className="centralizer">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Projeto">Projetos</Link></li>
                    <li><Link to="/Empresa">Empresa</Link></li>
                    <li><Link to="/Contato">Contato</Link></li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}

export default Header