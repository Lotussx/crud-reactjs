import React from 'react'
import { AreaHeader } from "./styled";
import { Link } from 'react-router-dom'


function Header() {

  return (
    <AreaHeader>
      <div className='container'>
        <div className='containerIMG'>
          <Link to="/"><img src='https://cdn-icons-png.flaticon.com/512/5987/5987462.png' alt='' /></Link>
        </div>
        <div className='containerMENU'>
          <ul>
            <Link to="/"><li>Inicio</li></Link>
            <Link to="/Config"><li>Configurações</li></Link>
            <Link to="/Logout"><li>Sair</li></Link>
          </ul>
        </div>
      </div>
    </AreaHeader>
  )

}

export default Header