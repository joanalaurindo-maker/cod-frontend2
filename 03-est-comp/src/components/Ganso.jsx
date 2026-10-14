import React, { useState } from 'react'

function Ganso() {
    const[ resultado, setResultado] = useState()
       function calcularProvisoes(){
            let marujos = Number(prompt("quantos marujus?"))
         let comida = Number(prompt("quantos quilos de comida?"))
           let comidaPorMarujo = comida / marujos
           
           if(marujos > 10 && comidaPorMarujo >= 1.5){
            setResultado("provisões suficientes. Rumo ao horizonte!")
           }else{
            setResultado("algo esta errado. Posseidom nao quer ninguem no mar hoje")

           }
       }
  return (
    <div className="Ganso">
        <h3>Ganso</h3>
        <button onClick={calcularProvisoes}>Ganso - provisões</button>
        {resultado}
    </div>
  )
}

export default Ganso
