import React from 'react'

const Multiplicacao = (props) => {
    const resultado = props.num1 * props.num2;
  return (
    <div>
        <h1>O resultado de {props.num1} * {props.num2} = {resultado}</h1>
    </div>
  )
}

export default Multiplicacao