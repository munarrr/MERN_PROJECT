import React from 'react'

export default function Input(props) {
     return (
          <input
          onChange={(event)=> props.setValue(event.target.value)}
           value={props.value} 
          type={props.type}
           placeholder={props.placeholder}
           />
     )
}

