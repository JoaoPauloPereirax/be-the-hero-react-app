import React from 'react';


import './styled.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form>
                    <h1>Faça seu logon</h1>
                    <imput placeholder="Sua ID"/>
                    <button type="submit">Entrar</button>
                    <a href="/register">Não tenho cadastro</a>
                </form>
            </section>
            <img src={heroesImg} alt="heroes" />
        </div>
    );
}