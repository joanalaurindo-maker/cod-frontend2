import React, { useState } from 'react'

function Jogo() {
const[resultado, setResultado] = useState ()

    function classificar(){
        let pontos = Number(prompt("Quantos pontos?"))
        if(pontos <= 10){
            setResultado("deu ruim...")
  // }else if(pontos >10 && pontos <= 100){
        }else if(pontos <=100){
             setResultado("mantenha a esperança, o sol nasceu ate para o cachorro")
        }else if(pontos <= 200){
            setResultado("Supimpa!")
        }else{
            setResultado("deu otimo!")
  }

    }
  return (
    <div className="Jogo">
      <h2>Jogo do amigo Juca.</h2>
      <button onClick={classificar}>classificar</button>
      {resultado}

    </div>
  )
}

export default Jogo
