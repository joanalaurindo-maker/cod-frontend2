import React, { useState } from 'react'

function MagoPalco() {
    const [resultado, setResultado] = useState("")

    function verificarPalco() {
        let somFuncionando = prompt("O som está funcionando? (sim/nao)")
        let figurinoCompleto = prompt("O figurino está completo? (sim/nao)")

        somFuncionando = somFuncionando.toLowerCase() == "sim"
        figurinoCompleto = figurinoCompleto.toLowerCase() == "sim"

        if (somFuncionando && figurinoCompleto) {
            setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!")
        } else if (!somFuncionando && figurinoCompleto) {
            setResultado("Sem som. Realizar apresentação alternativa no salão.")
        } else if (somFuncionando && !figurinoCompleto) {
            setResultado("Faltando parte do figurino. Te vira no improviso!")
        } else {
            setResultado("Apresentação cancelada. Hora da mágica de desaparecer…")
        }
    }

    return (
        <div className="MagoPalco">
            <h3>Entrada no Palco</h3>

            <button onClick={verificarPalco}>
                Verificar entrada no palco
            </button>

            <p>{resultado}</p>
        </div>
    )
}

export default MagoPalco