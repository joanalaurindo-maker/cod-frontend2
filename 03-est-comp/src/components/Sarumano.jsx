import React, { useState } from 'react'

function Sarumano() {
    const [resultado, setResultado] = useState("")

    function verificarFumaca() {
        let criancasPequenas = Number(prompt("Quantas crianças pequenas estão presentes?"))
        let velocidadeVento = Number(prompt("Qual a velocidade do vento em m/s?"))

        if (criancasPequenas === 0 && velocidadeVento >= 0.5) {
            setResultado("Fumaça liberada. Que comecem os mistérios!")
        } else {
            setResultado("Fumaça bloqueada. Aguardar condições ideais.")
        }
    }

    return (
        <div className="Sarumano">
            <h3>Sarumano</h3>
            <button onClick={verificarFumaca}>
                Sarumano - Fumaça Mística
            </button>
            <p>{resultado}</p>
        </div>
    )
}

export default Sarumano