import React, { useState } from 'react'

function Votar() {
    const[conta,setConta] = useState()

function verificarIdade(){
    let idade = Number(prompt("qual sua idade?"))
    let resultado

    if(idade < 16){
        resultado = "Não pode votar"
    }else if(idade <= 17){
        resultado = "Voto facultativo"
    }else if(idade <= 65){
        resultado = "Voto obrigatório"
    }else{
        resultado = "Voto facultativo"
    }

    setConta(resultado)
}

  return (
    <div className='Votar'>
      <h2>Idade para votar, oii!</h2>
      {/* 1: perguntar a idade */}
      {/* 2: descobrir se pode votar */}
      {/* 3: verificar se o voto é facultativo */}
      {/* 4: verificar se o voto é obrigatório */}
      {/* 5: mostrar o resultado */}
      <button onClick={verificarIdade}>Verificar idade</button>
      {conta}
{}
    </div>
  )
}

export default Votar
