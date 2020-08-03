import React from "react";

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import "./styles.scss"

export const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/30247928?s=460&u=64de7995bb903e32e72fec903b466b4d513cf303&v=4" alt="Gabriel Almir"/>

        <div>
          <strong>Gabriel Almir</strong>
          <span>Introdução a Programação</span>
        </div>
      </header>

      <p>
        Entusiasta for <em>programação de cérebros humanos</em>.
        <br/><br/>
        Apaixonado por desenvolvimento web, linguagens de programação,
        e por mudar a vidas das pessoas modificando os scripts do chips integrados aos seus cérebros.
        <br/><br/>
        Experiência em <strong>automatização de capuccino</strong>, criação de <em>waifus</em> para programadores(as),
        e <strong>automatizar o climbing rumo ao Prata no League Of Legends</strong>.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 42,00</strong>
        </p>

        <button type="button">
          <img src={WhatsAppIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}
