import React, { useState } from 'react'

function Home() {
    const[inputLogin, setInputLogin] = useState('')
    function efetuarLogin(){
     if(inputLogin == 'adin'){
      alert('Voce recebeu acesso de admin do sistema')
     }else{
      alert('voce digitou errado, o login é "admin"')
     }

    }
  return (
    <div className='home'>
      <h1>Inputs Controlados</h1>
      <label htmlFor="">Login</label>

      <input type="text" 
        value={inputLogin}
        onChange={(e) => setInputLogin(e.target.value)}
      />
        <p>
            {/* {inputLogin} */}
        </p>
      <button onClick={efetuarLogin}>Entrada</button>
    </div>
  )
}

export default Home