import React from 'react'

import "./style.css"

export default function Login() {
  return (
    <div>
       <section className="card" id="containerLogin">
      <div className="card-body">
        <div>
          <h1 className="login-titulo">

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
          </svg>
          Marcondes Viagens</h1>
          <p className="login-texto">Entre com seu e-mail e senha</p>
        </div>
        <form>
          <div className="formulario">
              <label for="inputEmail" className="formulario-item">E-mail:</label>
              <input type="email" className="formulario-borda"  aria-describedby="emailHelp" placeholder="Digite seu e-mail" required/>
          </div>
          <div className="formulario">
            <label for="inputPassword" className="formulario-item">Senha:</label>
            <input type="password" className="formulario-borda" placeholder="Digite sua senha" required/>
          </div>
          <button type="submit" className="btn-login">Entrar</button>
        </form>
        <div>
          <p className="login-texto">Não tem uma conta?</p>
          <a className="login-texto" href="cadastrosEmpresas.html">Cadastre-se agora</a>
          <p className="login-texto2">Ao continuar, aceito os<b> Termos de Uso </b>, e estou ciente da</p>
          <p className="login-privacidade"><b>Política de Privacidade </b></p>
        </div>
      </div>
    </section> 
    </div>
  )
}
