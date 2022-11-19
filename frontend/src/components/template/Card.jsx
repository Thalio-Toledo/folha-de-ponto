import './Card.css'
import Greeting from './Greeting'
import avatar from '../../assets/imgs/avatar.jfif'
import React from 'react';
import Nav from './Nav'


export default function (props) {
  const data = new Date().toLocaleDateString()
  
    return (
    
    <aside className=' profile text-light' >
      <img src={avatar} alt="Imagem de perfil" className='img-avatar' />
      <h2 className=' text-center'>{props.name}</h2>
    <Greeting  name="Thalio"/>
    <ul>
      <li>Horas Trabalhadas</li>
      <li>Data: {data}</li>
      <li>Marcar Ponto</li>
      <li>Folha de Ponto</li>
      <Nav/>
        
    </ul>

    </aside>
    )

          
    ;
  }