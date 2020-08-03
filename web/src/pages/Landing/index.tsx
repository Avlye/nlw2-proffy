import React from 'react'

import { Link } from 'react-router-dom'

import LandingImg from '../../assets/images/landing.svg'
import LogoImg from '../../assets/images/logo.svg'

import StudyIcon from '../../assets/images/icons/study.svg'
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg'
import PurpleHearIcon from '../../assets/images/icons/purple-heart.svg'

import "./styles.scss"

export function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LogoImg} alt="Logo Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={LandingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={StudyIcon} alt="Estudar"/>
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={GiveClassesIcon} alt="Dar Aulas"/>
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={PurpleHearIcon} alt="Coração Roxo"/>
        </span>
      </div>
    </div>
  )
}
