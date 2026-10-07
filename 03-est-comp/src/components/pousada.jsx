import React, { useState } from 'react'

function Pousada() {
    const[conta,setConta] = useState()

function calcularValor(){
    let dias = Number(prompt("quantos dias?"))
    let valorDiaria
    if(dias <= 5){
        valorDiaria = 100
    }else if(dias <= 10){
        valorDiaria = 90
    }else{
        valorDiaria = 80 
    }
let totalBruto = dias * valorDiaria

let desconto = totalBruto * 25/100

let multa = 150

let totalPagar = totalBruto - descontos + multa 
setConta("Vai pagar: R$" + totalPagar)

}

  return (
    <div className='Pousada'>
      <h2>Pousada, oii!</h2>
      {/* 1: perguntar quantos dias vai ficar */}
      {/* 2: descobrir o valor da diaria */}
      {/* 3: calcular total bruto */}
      {/* 4: calcular descontos e multa*/ }
      {/* 5: calcular total a pagar */}
      {/* 6: mostrar resultados */}
      <button onClick={calcularValor}>Fechar conta</button>
      {conta}
{}
    </div>
  )
}

export default Pousada
