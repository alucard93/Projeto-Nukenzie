import React from 'react'
import componentsLogin from '../../assets/componentsLogin.svg'
import './style.css'
import logo from '../../assets/logo.svg';

const Login = ({ setLogin }) => {
  return (
    <body className="background-login">
        <div className='login'>
            <div className="container">
                <div className="container-login">
                    <div>
                        <img src={logo} alt="Logo Nu Kenzie" className="container-login--image" />
                        <h1 className="container-login--title">
                            Centralize o controle das suas finanças
                        </h1>
                        <p>de forma rápida e segura</p>
                        <button onClick={() => setLogin(true)}>Iniciar</button>
                    </div> 
                    <div className="container-vetor">
                        <img src={componentsLogin} alt="imagem vetor" />
                    </div> 
                </div>
            </div>
        </div>
    </body>
  )
}

export default Login