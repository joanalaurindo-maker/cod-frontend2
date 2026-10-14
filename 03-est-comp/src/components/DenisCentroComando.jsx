import React, { useState } from 'react'

function DenisCentroComando() {
    const [resultado, setResultado] = useState("")

    function verificarAcesso() {
        let crachaValido = prompt("O crachá é válido? (sim/nao)")
        let digitalReconhecida = prompt("A digital foi reconhecida? (sim/nao)")

        crachaValido = crachaValido.toLowerCase() == "sim"
        digitalReconhecida = digitalReconhecida.toLowerCase() == "sim"

        if (crachaValido && digitalReconhecida) {
            setResultado("Acesso liberado ao Centro de Comando")
        } else if (!crachaValido && digitalReconhecida) {
            setResultado("Crachá inválido. Dirija-se à recepção")
        } else if (crachaValido && !digitalReconhecida) {
            setResultado("Falha na digital. Tente novamente ou chame o suporte")
        } else {
            setResultado("Acesso negado. Verifique sua identificação.")
        }
    }

    return (
        <div className="DenisCentroComando">
            <h3>Denis Nery e o Acesso ao Centro de Comando</h3>

            <button onClick={verificarAcesso}>
                Verificar acesso
            </button>

            <p>{resultado}</p>
        </div>
    )
}

export default DenisCentroComando