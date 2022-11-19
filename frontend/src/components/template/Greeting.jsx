import React, {useState} from 'react'


export default function Greeting(props) {

    const [hour, sethour] = useState(new Date().toLocaleTimeString())
    const hora = hour.split(':',1)

    if(hora < 12){
      return(
        <p className='text-center text-warning'>Bom dia, Sr {props.name}</p>
      )
    }else if(hora < 18){
           return (
           <p className='text-center text-warning'>Boa Tarde, Sr {props.name}</p>

           ) 
           }else {
                return (
                     <p className='text-center text-warning'>Boa noite, Sr {props.name}</p>
                   )
             }
    
      
  }