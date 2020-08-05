import React from 'react'

import { Link } from 'react-router-dom'

import BackIcon from '../../assets/images/icons/back.svg'
import LogoImg from '../../assets/images/logo.svg'

import './styles.scss'

interface PageHeaderProps {
  title: string,
  description?: string,
  children?: React.ReactNode
}

export const PageHeader: React.FC<PageHeaderProps> = (
  props: PageHeaderProps
) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={BackIcon} alt="Voltar"/>
        </Link>

        <img src={LogoImg} alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}

        {props.children}
      </div>

    </header>
  )
}
