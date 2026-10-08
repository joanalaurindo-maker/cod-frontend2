import React, { useState } from 'react'

function PesoIdeal() {
    const[conta,setConta] = useState()

function calcularPeso(){
    let altura = Number(prompt("qual sua altura?"))
    let genero = Number(prompt("qual seu genero? 1: feminino 2: masculino"))
    let peso

    if(genero == 1){
        peso = 62.1 * altura - 44.7
    }else{
        peso = 72.7 * altura - 58
    }

    setConta("Seu peso ideal é: " + peso.toFixed(2) + " kg")
}

  return (
    <div className='PesoIdeal'>
      <h2>Cálculo de peso ideal, oii!</h2>
      {/* 1: perguntar a altura */}
      {/* 2: perguntar o genero */}
      {/* 3: calcular o peso ideal */}
      {/* 4: mostrar o resultado */}
      <button onClick={calcularPeso}>Calcular peso</button>
      {conta}
{}
    </div>
  )
}

export default PesoIdeal